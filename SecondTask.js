const port = 3000
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end("<h1>Hello Node!!!!</h1>\n")
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if(err) {
        return console.log("Error", err)
    }
    console.log(`Listening on port ${port}`)
})