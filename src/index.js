import express from "express";
import React from "react";
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from "react-dom/server";
import fs from 'fs';
import path from 'path'

import { ListRoot, OnePromoRoot } from "./roots";
import Promo from './models/Promo';

const app = express();
var PORT = process.env.PORT || 3001;

import promoData from './data/promoMockData';

app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: true}));

let listBundle = "";
let onePromoBundle = "";

fs.readFile('./dist/js/listBundle.min.js', "utf8", function(err, data) {
  if (err) console.log("ERR" ,err);
  listBundle = data || "";
});

fs.readFile('./dist/js/onePromoBundle.min.js', "utf8", function(err, data) {
  if (err) console.log("ERR" ,err);
  onePromoBundle = data || "";
});

app.get('/health', (req, res) => res.send('ok'));

app.get('/', (req, res) => {
  console.log("get / callback")
  let user = req.user && req.user.nameID ? req.user.nameID.split("@")[0] : "localuser";
  console.log("user", user)
  res.send(returnHTML({ user }, listBundle, ListRoot, "Promotions - Promotion List"));
});

app.get('/newPromo', (req, res) => {
  console.log("get /newPromo callback")
  let user = req.user && req.user.nameID ? req.user.nameID.split("@")[0] : "localuser";
  console.log("user", user)
  res.send(returnHTML({ user }, onePromoBundle, OnePromoRoot, "Promotions - New Promotion"));
});

app.get('/editPromo/:id', (req, res) => {
  let user = req.user && req.user.nameID ? req.user.nameID.split("@")[0] : "localuser";
  let { id } = req.params;
  console.log("user", user)
  res.send(returnHTML({ user, id }, onePromoBundle, OnePromoRoot, "Promotions - Edit Promotion"));
});

app.get('/images/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.get('/csvdownload/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../csvdownload/' + req.params.id));
});

app.get('/api/getPromos', (req, res) => {
  res.send(promoData)
})
app.get('/api/getPromotionEnded', (req, res) => {
  let newList = [];
  promoData.map(a => {
    if(a.status == "Promotion Ended") newList.push(a);
  })
  res.send(newList);
})
app.get('/api/getPromo/:id', (req, res) => {
  res.send(promoData.find(a => a.id == req.params.id))
})
app.post('/api/createPromo', (req, res) => {
  promoData.push(new Promo(req.body));
  res.send(promoData)
})
app.put('/api/updatePromo/:id', (req, res) => {
  let index = promoData.findIndex(a => a.id == req.params.id);
  promoData.splice(index, 1, req.body)
  res.send(promoData)
})
app.delete('/api/deletePromo/:id', (req, res) => {
  let index = promoData.findIndex(a => a.id == req.params.id);
  promoData.splice(index, 1)
  res.send(promoData)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

function returnHTML(data, htmlBundle, Root, title){
  const dataString = JSON.stringify(data);
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<Root data={data}/>));
  const styles = sheet.getStyleTags();
    return `
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${title}</title>
          <meta name="Description" content=${title}>
        </head>
        <body>
          <script>window.__PROMO__=${dataString}</script>
          ${styles}
          <style>
            body {margin: 0;}
            h1, h2, h3, h4, p, input, textarea {
              font-family: 'Helvetica Neue', helvetica;
              font-weight: normal;
            }
            input {
              background: #f9fafb;
              border: 1px solid #DADCDF;
              border-radius: 2px;
              padding: 8px 12px;
            }
          </style>
          <div id="app">${body}</div>
          <script defer>${htmlBundle}</script>
        </body>
      </html>
    `;
}
