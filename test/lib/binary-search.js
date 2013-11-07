var bt  = require('../../lib/binary-search.js'),
    test = require('tap').test,
    tree = new bt;


test("Test creating the binary-search tree.", function(t) {
    tree.add(40);
    t.ok(tree.contains(40), "\"contains\" method: Tree should contain the number 40");
    t.end();
});


test("Testing dupes not allowed.", function(t) {
    tree.add(40);
    t.equal(tree.size(),1, "Should not have dupes");
    t.end();
});

test("Testing dupes not allowed.", function(t) {
    tree.add(13);
    tree.add(53);
    tree.add(27);
    t.equal(tree.size(),4, "Add method and size method working.");
    t.end();
});
/**
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
*/
