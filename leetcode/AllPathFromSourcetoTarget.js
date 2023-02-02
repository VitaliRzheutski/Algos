/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  console.log("graph:", graph);
  const target = graph.length - 1; //last index
  console.log("target:", target);
  const res = [];

  const dfs = (node, path) => {
    console.log("node:", node);

    path.push(node);
    console.log("path:", path);

    // if we've reached the target, we've found a path
    if (node === target) {
      res.push(path);
      return;
    }
    for (let edge of graph[node]) {
      console.log("edge:", edge);
      dfs(edge, [...path]);
    }
  };
  console.log("res:", res);
  dfs(0, []);
  return res;
};
