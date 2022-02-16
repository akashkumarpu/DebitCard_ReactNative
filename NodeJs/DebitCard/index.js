const express = require('express')
const app = express()

var cardDetails = {
       "cardnumber" : "9876323456234983",
       "limit" : "5000",
       "spent" : "1500",
       "holderName": "Mark Henry",
       "thruDate": "12/24",
       "cvv": "456"
 }

app.get('/', (req, res) => {
    res.send(cardDetails);
});

app.listen(3000, () => console.log("Listening to port 3000.."));