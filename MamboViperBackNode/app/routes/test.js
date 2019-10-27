const spawn = require("child_process").spawn;
// const process = spawn("python3", ["../src/main.py"])

let out = ""

const process = spawn("python3", ["../src/main.py"])

process.stdout.on("data", function(data){
    console.log(data.toString("utf8"))
})

