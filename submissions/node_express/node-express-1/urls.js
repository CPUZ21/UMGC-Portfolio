const express = require('express');

const request = require('request');

const axios = require('axios');
const e = require('express');

const app = express();

app.get('/practice', () => {
    
    axios.get("http://foozlemcblargh.com")
        .then(res => {
            console.log(res.data)
            const data =res.data
            const fs = require('fs');

            fs.writeFile("foozlemcblargh.html", data, "utf8" ,{
            })
        }).catch(e =>
            console.log("Couldn't write to http://foozlemcblargh.com"));

    

    

    axios.get("http://rithmschool.com")
        .then(res => {
            const data =res.data
            const fs = require('fs');

            fs.writeFile("rithmschool.html", data, "utf8", err =>{
                if (err) {
                    console.log("Error", err)
                    process.kill(1)
                }
                else{
                    console.log("Wrote to rithmschool.com")
                }
            })
        }).catch(e => 
                console.log("Couldn't write to http://rithmschool.com"));

    


    axios.get("https://nodejs.org/api/console.html")
        .then(res => {
            const data =res.data
            const fs = require('fs');
        
            fs.writeFile("nodejs.html", data, "utf8", err =>{
                if (err) {
                    console.log("Error", err)
                    process.kill(1)
                }
                else{
                    console.log("Wrote to nodejs.org")
                }
            })
        }).catch(e => 
                console.log("Couldn't write to https://nodejs.org/api/console.html"));





    axios.get("http://postgresql.com")
        .then(res => {
            const data =res.data
            const fs = require('fs');

            fs.writeFile("postgresql.html", data, "utf8", err =>{
                if (err) {
                    console.log("Error", err)
                    process.kill(1)
                }
                else{
                    console.log("Wrote to postgresql.com")
                }
            })
        }).catch(e =>
            console.log("Couldn't write to http://postgresql.com"));
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
});