const cluster = require('cluster');
const os = require('os');
const express = require('express');

const totalCPUs = os.cpus().length;

// console.log(totalCPUs);


if (cluster.isPrimary) {
  
  
    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
      // here, creating workers process
      cluster.fork();
    }
}else{
    const app = express();
    const port = 8080;

    app.get('/', (req, res) => {
        return res.json({
            message : `Hello from the express server ${process.pid}`
        })
    });


    app.listen(port, function(err){ 
        if(err){
            console.log(err);
            return;
        }
        console.log(`Server is listening on ${port}`);
    })
}
