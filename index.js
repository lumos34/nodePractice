// uptimr Monitoring Applicartion
// a restfull  API to monitor up or down time of user defined links\\


// dependensies 

const http= require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding
const app= {};

// configuration
app.config= {
    port: 3000,
};

// create server
app.createserver=()=>{
    const server = http.createServer(app.handleReqRes);  
    server.listen(app.config.port, () => {          // callback function . jodi port er sathe connected hoi tahole ei function run hobe 
        console.log('listenning to port ${app.config.port}');   /// port numbr show  korse nna 
    });  
};
//handle Request response 
app.handleReqRes = handleReqRes;
//start the server
app.createserver();