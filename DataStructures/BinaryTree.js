
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(key) {

    var node = new Node(key);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }

    return node;
  }

  insertNode(root, newNode) {

    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  traverseDFS(callback) { // Depth First Search
    this.traverseDFSNode(this.root, callback);
  }

  traverseDFSNode(root, callback) {
    if (root !== null) {
      callback(root.key);
      this.traverseDFSNode(root.left, callback);
      this.traverseDFSNode(root.right, callback);
    }
  }

  traverseBFS(callback) { // Breadth First Search
    if(this.root === null) {
      return;
    }
    const aux = []
    aux.push(this.root)

    while(aux.length > 0){
      const node = aux.shift()
      callback(node.key)

      if(node.left !== null) {
        aux.push(node.left)
      }
      if(node.right !== null) {
        aux.push(node.right)
      }
    }
  }



  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

}


var tree = new BinarySearchTree();
tree.insert(4)
tree.insert(2)
tree.insert(7)
tree.insert(1)
tree.insert(3)

console.log('DEPTH FIRST SEARCH')
tree.traverseDFS((value) => console.log('value', value))

console.log('BREADTH FIRST SEARCH')
tree.traverseBFS((value) => console.log('value', value))

console.log('IN ORDER TRAVERSE')
tree.inOrderTraverse((value) => console.log('value', value))

console.log('PRE ORDER TRAVERSE')
tree.preOrderTraverse((value) => console.log('value', value))

console.log('POST ORDER TRAVERSE')
tree.postOrderTraverse((value) => console.log('value', value))

