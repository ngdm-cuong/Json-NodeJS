var jsonFile = require('jsonfile')
var fileName = 'data.json';


jsonFile.readFile(fileName, function(err, jsonData) {
    if (err) throw err;
    for (var i = 0; i < jsonData.items.length; ++i) {
  
      console.log(jsonData.items[i].fname + " " + jsonData.items[i].age);

    }
  });
