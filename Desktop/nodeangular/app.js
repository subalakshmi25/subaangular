const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Subasundar@25',
  database: 'detail'
});
 
//connect to database

conn.connect((err) =>{
  if(err) throw err;
  console.log('Database connected ');
});
 
//show all products

app.get('/api/products',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({ "response": results}));
  });
});
 
//show single product

app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({ "response": results}));
  });
});
 
//add new product

app.post('/api/products',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"response": results}));
  });
});
 
//update product

app.put('/api/products/:id',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({ "response": results}));
  });
});
 
//Delete product

app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.send(JSON.stringify({ "response": results}));
  });
});
 
//Server listening

app.listen(8000,() =>{
  console.log('Server started on port 8000...');
});