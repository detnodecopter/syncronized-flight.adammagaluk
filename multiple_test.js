#!/usr/bin/env node

var arDrone = require('ar-drone');

/**
 * Attempt to load the requested config.
 */

/**
 * Create client connection to the AR.Drone.
 */
var clients = [
  arDrone.createClient({ ip: "192.168.0.5" }),
  arDrone.createClient({ ip: "192.168.0.6" }),
  arDrone.createClient({ ip: "192.168.0.7" })
];

process.stdin.resume();  
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);
process.stdin.on("data",function(key){

  if (key === "\u0003") {
    process.exit();
  }

  if(key === ' '){
    console.log("land")
    
    clients[0].stop();
    clients[1].stop();
    clients[2].stop();


    clients[0].land();
    clients[1].land();
    clients[2].land();
  }

  if(key === "+"){
    console.log("Up")
    clients[0].up(0.15);
    clients[1].up(0.15);
    clients[2].up(0.15); 
  }
  if(key === "-"){
    console.log("Down")
    clients[0].down(0.15);
    clients[1].down(0.15);
    clients[2].down(0.15);
  }

  if(key === "="){
    console.log("Level")
    clients[0].down(0);
    clients[1].down(0);
    clients[2].down(0);
  }

});

//clients[0].config('control:control_yaw',10)
//clients[1].config('control:control_yaw',10)
//clients[2].config('control:control_yaw',10)

clients[0].disableEmergency();
clients[1].disableEmergency();
clients[2].disableEmergency();

clients[0].takeoff();
setTimeout(function(){
  clients[1].takeoff();
  setTimeout(function(){clients[2].takeoff();},2000);
},2000);


setTimeout(function(){

clients[0].left(0.25);
clients[1].left(0.25);
clients[2].left(0.25);

clients[0].up(0.1);
clients[1].up(0.1);
clients[2].up(0.1);

clients[0].clockwise(0.25);
clients[1].clockwise(0.25);
clients[2].clockwise(0.25);

  setTimeout(function (){
    clients[0].stop();
    clients[1].stop();
    clients[2].stop();

    clients[0].land();
    clients[1].land();
    clients[2].land();
  },30000);

},3000);
