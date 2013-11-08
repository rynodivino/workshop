var bt = require('../../lib/binary-search'),
    tree = new bt(),
    numbers = process.argv.slice(2);

    numbers.forEach( function(number) {
        tree.add(+number);
    });

console.log(tree);
