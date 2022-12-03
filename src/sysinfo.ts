const si = require('systeminformation');

const result=[];
Promise.all([
    si.cpu(function(data){
        result.push(data);
    }),
    si.system(function(data){
        result.push(data);
    }),
    si.mem(function(data){
        result.push(data);
    }),
    si.osInfo(function(data){
        result.push(data);
    }),
    si.currentLoad(function(data){
        result.push(data);
    }),
    si.processes(function(data){
        result.push(data);
    }),
    si.diskLayout(function(data){
        result.push(data);
    }),
    si.networkInterfaces(function(data){
        result.push(data);
    })])
    .then((result)=>{
        //console.log(result);
    });

    const hostname = 'localhost';
    const port = 8000;
    const http = require('http');
    const requestListener = function (req, response){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(result));
        response.end(`{"message": "This is a JSON response"}`);
    }

 
    
    const server = http.createServer(requestListener);
    server.listen(port, hostname, () => {
      //console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
    });

    export default si;