class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
       this.adjacencyList[v1].push(v2);
       this.adjacencyList[v2].push(v1) 
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)

    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    //GRAPH TRAVERSAL

    //func should accept a starting node(vertex)
    depthFirstRecursive(start){
        //create a list to store the end result,to be retuned at the very end
        const result = [];
        //create an object to store visited vertices
        const visited = {};
        //because meaning of context this has changed(in the inside func)
        const adjacencyList = this.adjacencyList;
        //create a helper func which accepts a vertex
        (function dfs(vertex){
            //if the vertex is empty
            if(!vertex) return null;
            //place the vertex it accepts in to the visited object
            visited[vertex] = true;
            //push that vertex into the result array
            result.push(vertex);
            //loop over through the adjacencyList for that vertex
            adjacencyList[vertex].forEach(neighbor => {
                //if any of those values hanne not been visited 
                //recursively invoke the helper func with that vertex
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);//immediattely ivoked func

        return result;
    }
   
}


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("B")) 

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F




// g.addVertex("Vitali")
// g.addVertex('Hanna')
// g.addVertex('Viktor')
// g.addVertex('Olga')
// g.addEdge("Hanna","Vitali")
// g.addEdge("Viktor","Olga");
// g.removeVertex("Vitali")
// g.removeVertex("Hanna")
// console.log('g:',g.adjacencyList)