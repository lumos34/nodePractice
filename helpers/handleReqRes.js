// handle request and response


//dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) =>{
    //request handling
    //get the url and parse it
     const parsedUrl = url.parse(req.url, true);
     const path = parsedUrl.pathname;
     const trimmedpath = path.replace(/^\/+|\/+$/g, '');
     //console.log(trimmedpath);
     const method = req.method.toLowerCase();
     const queryStringObject = parsedUrl.query;
     //console.log(queryStringObject);
     const headersObject = req.headers;
     //console.log(headersObject);
     const decoder = new StringDecoder('utf-8');
     let realdata ='';

     req.on('data', (buffer)=>{
         realdata += decoder.write(buffer);
     });

     req.on('end', ()=>{
         realdata += decoder.end();
         console.log(realdata);
        //response handle
         res.end('Hello world. i am  topu');
     });
}; 

module.exports = handler;