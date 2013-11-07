function BinarySearchTree () {
    this._root = null;
}

BinarySearchTree.prototype = {

    add: function(value) {
        var node = {
            value: value,
            left: null,
            right: null
        }, current;

        if (this._root === null) {
            this._root = node;
            return;
        }

        current = this._root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                break;
            }
        }
    },

    contains : function(value) {
        var found = false,
            current = this._root;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                value = current.right;
            } else {
                found = true;
            }
        }
        return found;
    },

    traverse: function(process) {

        var inOrder = function(node) {

            if (node.left !== null) {
                inOrder(node.left);
            }

            process.call(this, node);

            if (node.right !== null) {
                inOrder(node.right);
            }

        };

        inOrder(this._root);
    },

    size: function () {
        var length = 0;

        this.traverse(function() {
            length++;
        });

        return length;
    },

    toArray: function() {
        var arr = [];
        this.traverse(function(node) {
            arr.push(node.value);
        });
        return arr;
    },

    toString: function() {
        return this.toArray.toString();
    }
}

module.exports = BinarySearchTree;
