// get our server to make a request to server_x
// server_x will return a response with the data or recource requested
// this is done using a public api 

// usin native node modules this procces is long and complicated
// for example if we use the https module it would look like this 

import https from "https"

app.get("/", (req, res) => {
    const options = {
        hostname: "domain_name.com",
        path: "/someting",
        method: "GET",
    };
})

//call on the app object
//The first argument "/" is a string that represents the route path.
//It tells the application to listen for GET requests to the root path (/).
//and setting up routes and their associated handlers.
//-----//
//(req, res): is the callback function that will handle requests to this route.
//req: The request object, containing information about the incoming HTTP request.
//res: The response object, used to send back the HTTP response.
app.get("/", (req, res) => {
    // Define options for the HTTPS request
    const options = {
        //This sets the hostname (domain) of the server you want to send a request to.
        hostname: "server_name.com", 
        //This specifies the path or endpoint on the server you want to access.
        path: "/name_of_enpoint", 
        //This sets the HTTP method for the request: in this case GET.
        //app.get() means "expect a GET request"
        //method: "GET" in the options object means "I want to make a GET request"
        //all app.get will have the methode of GET but still this needs to be done manually
        method: "GET",
    };
})

//now do deepen the understanding and grasp this connection concept       
//The app object is: an instance of an Express application.
// doing: app.get is supervising this connection
// note: its not establshing a connection, as the client and server are already connected via internet
//       rather app.get is stationed to supervise this specific connection

//By writing app.get, were using this method to define a route handler for GET requests.

//we  are sending it 2 thins: 1: "/"  , 2: a callback containing 2 objects (req, res)
//When a GET request to "/domain.com/location" comes in, Express creates the req and res objects.
//  note: both req & res are handled on the server side by Express
//Express then calls your callback function, passing these req and res objects to it.
//  note: these callbacks will be in the continuing code

// The function (req, res) => { ... } is passed as an argument to app.get()
// It's not executed immediately, but later when a specific condition is met (a matching HTTP request is received)

// both req & res are handled on the server side
// When a client makes a request, the server creates a req object to represent that request.
// The server then uses the res object to formulate and send the response.
