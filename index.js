var leveldown = require('leveldown');
var sleep = require('sleep');

var db  = leveldown('/tmp/leveldown.db');

console.log(db);

var log = function(err) {
  console.log(err);
}

db.put("hello","there", log);

while (1) {
  sleep.sleep(5);
}
