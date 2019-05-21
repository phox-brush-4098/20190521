const express = require('express');
const app = express();

let addrBook = [
  {name:'Hanako', info:
{tel:'0304458823', addr:'dokoka'}},
  {name:'Taro', info:{tel:'0304453387', addr:'tooi'}},
  {name:'Jiro', info:{tel:'0302238876', addr:'tokoro'}}
]; 

app.get('/', function(req, res) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  res.send({result:addrBook.length, data:addrBook});
});

app.get('/KOYAN', function(req, res) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  res.send({result:addrBook.length, data:addrBook});
});

app.get('/addr', function(req, res) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');

  addrBook.forEach(function(e) {
    if(e.name == req.query.name) {
      result.result++;
      result.data.push(e.info);
    }\
  });
  res.send(result);
});

app.listen(process.env.PORT || 8080);