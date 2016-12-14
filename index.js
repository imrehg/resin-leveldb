var sleep = require('sleep')
var Moniker = require('moniker')

var level = require('levelup')

var db = level('./mydb');

var i = 0

var newName = function() {
  var varname = 'name-'+i
  i++
  db.put(varname, Moniker.choose(), function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error

    db.get(varname, function (err, value) {
      if (err) return console.log('Ooops!', err) // likely the key was not found
      console.log(varname + '=' + value)
    })
  })

}

newName()
var naming = setInterval(newName, 3*1000)
