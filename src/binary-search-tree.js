const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.rootTree = null;
    }
    root() {
        return this.rootTree;
    }

    add(data) {
        this.rootTree = this.addNode(this.rootTree, data);
    }
    addNode(node, data) {
        if (!node) { return new Node(data); }
        if (node.data === data) {
            return node;
        }
        if (data < node.data) {
            node.left = this.addNode(node.left, data);
        } else {
            node.right = this.addNode(node.right, data);
        }
        return node;
    }

    has(data) {
        return this.hasNode(this.rootTree, data);
    }
    hasNode(node, data) {
        if (!node) { return false; }
        if (data === node.data) { return true; }
        if (data < node.data) {
            return this.hasNode(node.left, data);
        } else {
            return this.hasNode(node.right, data);
        }
    }

    find(data) {
        return this.findNode(this.rootTree, data);
    }
    findNode(node, data) {
        if (!node) { return null; }
        else if (data < node.data) {
            return this.findNode(node.left, data);
        } else if (data > node.data) {
            return this.findNode(node.right, data);
        } else if (data === node.data) {
            return node;
        }
    }

    remove(data) {
        this.rootTree = this.removeNode(this.rootTree, data);
    }
    removeNode(node, data) {
        if (!node) { return null; }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) { return null; }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }

    min() {
        let miniNode = this.minNode(this.rootTree);
        return miniNode.data;
    }
    minNode(node) {
        if (!node.left) {
            return node;
        } else {
            return this.minNode(node.left);
        }
    }

    max() {
        let maxiNode = this.maxNode(this.rootTree);
        return maxiNode.data;
    }
    maxNode(node) {
        if (!node.right) {
            return node;
        } else {
            return this.maxNode(node.right);
        }
    }
}

module.exports = {
    BinarySearchTree
};