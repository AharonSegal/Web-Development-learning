import axios from "axios"


// Boilerplate
app.get("/", async (req, res) => {
    try {
        // ... code here ...
    } catch (error) {
        console.error("Failed to make request:", error.message);
                   //error code
        res.status(number).send("failed error");
    }
});

// usage
app.get("/", async (req, res) => {
    try {
        //specific API endpoint.
        const response = await axios.get("https://domain.com/location");
        //assining the recived data to set item in my file
        res.render("expressFile.ejs", { header_key: header_value});
    } catch (error) {
        console.error("Failed to make request:", error.message);
        // i chose what error number to return for expected error: example 404, 500
        res.status(number).send("failed error");
    }
});

//now do deepen the understanding and grasp this connection concept

//app.get
//The app object is: an instance of an Express application.
// doing: app.get is supervising this connection
// note: its not establshing a connection, as the client and server are already connected via internet
//       rather app.get is stationed to supervise this specific connection

// ("/", async (req, res)
//we  are sending it 2 things: 1: "/domain.com/location"  , 2: a callback containing 2 objects (req, res)
//(req, res)
//When a GET request to "/domain.com/location" comes in, Express creates the req and res objects.
//  note: both req & res are handled **my** server side by Express
//Express then calls your callback function, passing these req and res objects to it.
//  note: these callbacks will be in the continuing code
//async is used to declare an asynchronous function.
//      it allows you to use the await keyword inside the function.

// const response = await axios.get("https://domain.com/location");
// response = 
// The await keyword makes the code wait until this Promise resolves.
// axios.get() returns a Promise that will eventually resolve with the response from the URL.
//Once resolved, the actual response data (not the Promise itself) is assigned to response.
// if promise returns an error then instead of assining to response the promise goes to cath

//1. Start executing the function
//2. Reach the await axios.get(...)
//3. Pause execution and wait for the HTTP request to complete
//4. Once the request is complete, assign the response to 'response'
//5. Continue with the next line of code

// break down of what happens in 3
//a.Network Request Initiation:
//  - Axios prepares an HTTP GET request based on the URL provided.
//  - It sets up necessary headers, including any default headers or those weve specified. 
//b.DNS Resolution: (Domain Name System)
//  - If the URL contains a domain name, your system performs a DNS lookup to find the IP address of the serve   *can contain ip adress or localhost
//c.TCP Connection: (Transmission Control Protocol ) 
//  - Once the IP is known, your system establishes a TCP connection with the server.
//    * The TCP connection is a specific, dedicated communication channel between your system and the server you're trying to reach.
//d.SSL/TLS Handshake (for HTTPS):
//  - If it's an HTTPS request, a secure connection is established through an SSL/TLS handshake.
//        * if HTTP this stage is skipped 
//e. Send HTTP Request:
//  - The actual HTTP GET request is sent over the established connection.
//f. Server Processing:
//  - The server receives the request and processes it.
//      note: This could involve database queries, computations, or other operations on the server side.
//g. Response Generation:
//  - The server generates an HTTP response, including status code, headers, and body.
//h. Response Transmission:
//  - The server sends the response back over the network.
//i. Response Receipt:
//  - Axios receives the response data in chunks.
//  - It assembles these chunks into a complete response object.
//      **i thought that express did this
//j. Promise Resolution:
//  - Once the full response is received, Axios resolves the Promise with this response object.









    


  
 