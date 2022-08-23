//const fs = require('fs')
const mongoose = require('mongoose')
const Product = require('./models/blog');
const Category = require('./models/category_blog');

const express = require('express');
var cors = require('cors');
const app = express();
const dbURI = "mongodb+srv://prod_management:test1234@productmanagement.naaqj.mongodb.net/note?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then((result) => { console.log("running")})
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

// var productsArr = {}
// var categoriesArr = {}

// fs.readFile('products.json', (err,data)=>{
//   if(err)
//   {
//     return err;
//   }
//   productsArr = JSON.parse(data);
// })

// fs.readFile('categories.json', (err,data)=>{
//   if(err)
//   {
//     return err;
//   }
// categoriesArr = JSON.parse(data);
// })

app.get('/getProduct',(req,res)=>{
  Product.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
  //res.send(productsArr);
});

app.get('/getCategory',(req,res)=>{
  Category.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
   //res.send(categoriesArr);
});

app.post('/postProduct',(req,res)=>{
  const products = new Product({
      _id: Math.floor(1000 + Math.random() * 9000),
      name:req.body.name,
      mrp:req.body.mrp,
      availableStock:req.body.availableStock,
      measure:req.body.measure,
      category:req.body.category
  }); //const products = new Product({})
  products.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.post('/postCategory',(req,res)=>{
  const categories = new Category({
      _id:Math.floor(100 + Math.random() * 900),
      categoryName:req.body.categoryName
  });
  categories.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch((err) => { res.send(err)
    });
});

app.delete('/DelProduct', (req, res) => {
 const id = req.query.id;
      Product.findByIdAndDelete(id)
      .then((result) => {res.send(result)})
      .catch((err) => {console.log('error')})
  });

app.delete('/DelCategory', (req, res) => {
    const id = req.query.id;
    Category.findByIdAndDelete(id)
    .then((result) => {res.send(result)})
    .catch((err) => {console.log('error')})
});

app.post('/updateProduct/:id', (req, res) => {
  var new_prod = {
    name: req.body.name,
    mrp: req.body.mrp,
    availableStock: req.body.availableStock,
    measure: req.body.measure,
    category: req.body.category
  };
  Product.updateOne({_id: req.params.id}, {$set:new_prod})
  .then((result) => {res.send(result)})
    .catch((err) => {console.log('error')})
});

app.listen(3000,()=>console.log("listening to port 3000"));