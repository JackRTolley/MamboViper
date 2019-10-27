const spawn = require("child_process").spawn;

module.exports = function(app) {
    app.get("/getContComments", ( req, res ) => {
        try {
            let output = ""

            const process = spawn("python3", ["./main.py"])

            process.stdout.on("data", function(data){
                output += data.toString("utf8")

                res.json({
                    result: "success",
                    info: "Comments successfully generated.",
                    comments: output,
                })
            })
        } catch ( error ) {
            res.json({
                result: "error",
                info: "There was an error generating responses.",
                error: error
            })
        }
    })
}