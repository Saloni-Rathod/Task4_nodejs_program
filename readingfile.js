var fs = require('fs');

fs.readFile('testfile.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});

    fs.writeFile('test.txt', 'Hello World!', function (err) { 
        if (err)
console.log(err);
        else
console.log('Write operation complete.');

});