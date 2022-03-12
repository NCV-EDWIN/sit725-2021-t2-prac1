console.log("Hello world")

var log=function(msg){
    console.log("[Log] : ",msg )
}

var adder=function(first,second){
    var sum = first+second
    return sum
}

var async = function(){
    setTimeout(function(){
        log("I m comming out later although I have been called before the next one")
    },2000)
}


log("hello world")
log("welcome to SIT737")
log("The sum is " + adder(5,6))
async()
log("This is going to comeout before the previous one")

var express = require('express')
var app = express()

app.get('/', function (req ,res) {
    res.send('hello word')
})

app.listen(3000)