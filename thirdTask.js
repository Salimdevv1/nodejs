var fs = require("fs");
fs.appendFile('welcome.txt' , "hello node" , function(err, data){
    if (err){
        console.error(err)
    }
    console.log("File created successfully")
} )
fs.readFile('welcome.txt' ,function(err, data){
    if (err) {
        console.error(err)
    }
    console.log(data.toString())
})