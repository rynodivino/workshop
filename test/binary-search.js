var bt  = require('../binary-search.js'),
    test = require('tap').test,
    tree = new bt;

tree.add(40);
tree.add(13);
tree.add(53);
tree.add(27);
// change to assertions
console.log(tree.contains(40));
console.log(tree.toArray());
console.log(tree.size());

tree.add(12);
tree.add(44);
tree.add(9);
tree.add(35);
tree.add(67);
tree.add(10);
tree.add(48);
tree.add(11);


console.log(tree.contains(40));
console.log(tree.toArray());
console.log(tree.size());

test("test the functions of the binary-search tree", function(t) {
    t.ok(tree.contains(40), "Tree should contain the number 40");
    t.end();
});
