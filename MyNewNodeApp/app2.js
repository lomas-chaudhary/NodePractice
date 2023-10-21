// console.log(__dirname);
// console.log(__filename);


// function callFunction(fun){
//     fun();
// }

// var sayHi=function(){
//     console.log("hi");
// }

// callFunction(sayHi);
// var counter=require('./count');

// console.log(counter(['lomas','mahesh','sourabh','anitya']))

// var stuff=require('./count');

// console.log(stuff.counter(['lomas','chaudhary']))
// console.log(stuff.adder(2,3));
// console.log(stuff.pi);



// var events=require('events');
// var myEmitter=new events.EventEmitter();
// myEmitter.on('someEvent',function(message){
//     console.log(message)
// });
// myEmitter.emit('someEvent','the event was emitter')


var events=require('events');
var util=require('util');

var Person=function(name){
    this.name=name;
}

util.inherits(Person,events.EventEmitter);

var james=new Person('james');
var mary=new Person('mary');
var ryu=new Person('ryu');

var people=[james,mary,ryu];

people.forEach(function(person){
    person.on('speak',function(message){
        console.log(person.name+ ' said: '+message)
    });
});

james.emit('speak', 'hey dudes')