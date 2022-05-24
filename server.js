//Load the app
const express = require('express')
//Call the function
const app = express()
//Load the data
const getData = require('./Controllers/getData')
//Load products
const productData = getData()
// Define a port location
const PORT = 3000;

//Middleware function
app.use((req,res, next) => {
    console.log('Middleware is running!')
    next();
})
  //JSON Midlleware
  app.use(express.json())
  app.use(express.urlencoded({extended: false}))

  //set up view engine
  app.set('view engine', 'ejs')
  app.set('views', './Views')

//Root route
app.get('/', (req, res) => {
    console.log('Howdy, Pardner!')
    res.render('home', {
       pageTitle: 'Home Page',
       pageHeader: 'Home Page' 
    })
})

app.get('/products',(req, res) =>{
         res.render('products', {data: productData, pageTitle: 'Product Page'})
})

app.get('/products/new',(req, res) =>{
    res.render('new-product')
})


app.get('products/:id',(req, res) =>{
    console.log(req.params)
    res.send(productData[req.params.id])
})

//app.get('', (req,res) => {
 //   console.log('')
  //  res.sender('')


app.listen(PORT,() =>{
    console.log(`Breaker!, breaker! Come in big buddy! Server is running on port:${PORT}`)
} )