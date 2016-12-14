var leveldown = require('leveldown');
var sleep = require('sleep');

var db  = leveldown('/tmp/leveldown.db');

console.log(db);

db.put("hello","there", function(err) { console.log(err) });

while (1) {
  sleep.sleep(5);
}
