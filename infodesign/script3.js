var m = [0, 0, 0, 0],
  w = 1280 - m[1] - m[3],
  h = 720 - m[0] - m[2],
  i = 0,
  root;

// Define a tree layout
var tree = d3.layout.tree()
  .size([h, w]);

// Define a diagonal projection for the links
var diagonal = d3.svg.diagonal()
  .projection(function (d) { return [d.y, d.x]; });

// Create the SVG container
var svg = d3.select("#mindmap").append("svg")
  .attr("width", w + m[1] + m[3])
  .attr("height", h + m[0] + m[2])
  .attr("viewBox", `0 0 ${w + m[1] + m[3]} ${h}`)
  .style("cursor", "grab") // Change cursor to indicate dragging
  .call(d3.behavior.zoom() // Enable zoom and pan
    .scaleExtent([0.5, 3]) // Limit zoom scale
    .on("zoom", zoomed))
  .append("g") // Create a group for the visualization
  .attr("transform", `translate(${m[3]}, ${m[0]})`);

// Zoom function to adjust the group transform
function zoomed() {
  svg.attr("transform", `translate(${d3.event.translate}) scale(${d3.event.scale})`);
}

// Fetch data from the external JSON file
d3.json("data2.json", function (error, json) {
  if (error) {
    console.error("Error loading data:", error);
    throw error;
  }

  root = json;
  root.x0 = h / 2; // Start vertically centered
  root.y0 = 0;

  // Initialize and update the visualization
  update(root);

  function update(source) {
    var duration = d3.event && d3.event.altKey ? 5000 : 500;

    // Compute the new tree layout
    var nodes = tree.nodes(root).reverse();

    // Normalize for fixed-depth
    nodes.forEach(function (d) { d.y = d.depth * 180; });

    // Update the nodes
    var node = svg.selectAll("g.node")
      .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position
    var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
      .on("click", function (d) { toggle(d); update(d); });

    nodeEnter.append("circle")
      .attr("r", 1e-6)
      .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("a")
      .attr("xlink:href", function (d) { return d.url; })
      .append("text")
      .attr("x", function (d) { return d.children || d._children ? -20 : 20; })
      .attr("dy", ".35em")
      .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
      .text(function (d) { return d.name; })
      .style("fill", function (d) { return d.free ? "black" : "#999"; })
      .style("fill-opacity", 1e-6);

    nodeEnter.append("title")
      .text(function (d) { return d.description; });

    // Transition nodes to their new position
    var nodeUpdate = node.transition()
      .duration(duration)
      .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
      .attr("r", 12)
      .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeUpdate.select("text")
      .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
      .remove();

    nodeExit.select("circle")
      .attr("r", 1e-6);

    nodeExit.select("text")
      .style("fill-opacity", 1e-6);

    // Update the links
    var link = svg.selectAll("path.link")
      .data(tree.links(nodes), function (d) { return d.target.id; });

    // Enter any new links at the parent's previous position
    link.enter().insert("path", "g")
      .attr("class", "link")
      .attr("d", function (d) {
        var o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      })
      .transition()
      .duration(duration)
      .attr("d", diagonal);

    // Transition links to their new position
    link.transition()
      .duration(duration)
      .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position
    link.exit().transition()
      .duration(duration)
      .attr("d", function (d) {
        var o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      })
      .remove();

    // Stash the old positions for transition
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Toggle children
  function toggle(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
  }


  // Collapse all nodes
  function collapseAll(d) {
    if (d.children) {
      d.children.forEach(collapseAll);
      toggle(d);
    }
  }

  // Add event listener for collapsing all nodes
  document.getElementById("collapse-all").addEventListener("click", function () {
    collapseAll(root);
    update(root);
  });


  // Expand all nodes
  function expandAll(d) {
    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    if (d.children) {
      d.children.forEach(expandAll);
    }
  }

  // Add event listener for expanding all nodes
  document.getElementById("expand-all").addEventListener("click", function () {
    expandAll(root);
    update(root);
  });

});