function BinarySearchTree() {
    this.rootNode = null;
}

BinarySearchTree.prototype = {
    add: function(value) {
        var node = {
            value: value,
            right: null,
            left: null
        }, current;

        // If tree is empty.  Add item as root.
        if (this.rootNode === null) {
            this.rootNode = node;
        } else {

            current = this.rootNode;

            while (true) {
                // Value is less than the current node.
                if (value < current.value) {
                    // Current node has not left/lower leaf.
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        // Move left and re-evaluate.
                        current = current.left;
                    }
                // Same logic for right/greater leaves
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    // Already exists.  Ignore it.
                    break;
                }
            }
        }
    }
};

var tree = new BinarySearchTree(),
    numbers = process.argv.slice(2),
    i = 0,
    l = numbers.length;
while (i < l) {
    tree.add(+numbers[i]);
    i++;
}
console.log(tree);
