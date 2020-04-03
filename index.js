'use strict'

//import { request } from "http"
var request = require("request");

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    res.sendFile('');
});



app.post('/user', (req, res) => {
    const user =req.body;
    res.json(user);



    var options = { method: 'POST',
  url: 'https://api.hubapi.com/contacts/v1/contact/batch/',
  qs: { hapikey: 'ee4c6998-6093-4bdd-a298-7deedd606f3f' },
  headers: 
   { 'Content-Type': 'application/json' },
  body: 
   [ { vid: '259429',
       properties: 
        [ { property: 'firstname', value: 'Harper' },
          { property: 'lastname', value: 'Wolfberg' },
          { property: 'website', value: 'http://hubspot.com' },
          { property: 'company', value: 'HubSpot' },
          { property: 'phone', value: '555-122-2323' },
          { property: 'address', value: '25 First Street' },
          { property: 'city', value: 'Cambridge' },
          { property: 'state', value: 'MA' },
          { property: 'zip', value: '02139' } ] },
     { email: 'testingapis@hubspot.com',
       properties: 
        [ { property: 'firstname', value: 'Codey' },
          { property: 'lastname', value: 'Huang' },
          { property: 'website', value: 'http://hubspot.com' },
          { property: 'company', value: 'HubSpot' },
          { property: 'phone', value: '555-122-2323' },
          { property: 'address', value: '25 First Street' },
          { property: 'city', value: 'Cambridge' },
          { property: 'state', value: 'MA' },
          { property: 'zip', value: '02139' } ] } ],
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(response);
});
})

app.listen(3000, err => { if (err) {  console.error(err); return;  }  console.log('app listening on port 3000'); });


// var request = require("request");

// var options = { method: 'POST',
//   url: 'https://api.hubapi.com/contacts/v1/contact/',
//   qs: { hapikey: 'demo' },
//   headers: 
//    { 
//      'Content-Type': 'application/json' },
//   body: 
//    { properties: 
//       [ { property: 'email', value: 'testingapis@hubspot.com' },
//         { property: 'firstname', value: 'test' },
//         { property: 'lastname', value: 'testerson' },
//         { property: 'website', value: 'http://hubspot.com' },
//         { property: 'company', value: 'HubSpot' },
//         { property: 'phone', value: '555-122-2323' },
//         { property: 'address', value: '25 First Street' },
//         { property: 'city', value: 'Cambridge' },
//         { property: 'state', value: 'MA' },
//         { property: 'zip', value: '02139' } ] },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });





