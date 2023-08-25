const express = require('express');
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