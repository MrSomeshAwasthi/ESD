const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
const products = [
  {
      "id": 1,
      "name": "Puma baadal",
      "imageSrc": "https://m.media-amazon.com/images/I/618F2QyUUEL._SX569_.jpg",
      "material": "Cotton",
      "color": "Blue",
      "sizes": ["S","M","L","XL"],
      "price": 5500
  },
  {
      "id": 2,
      "name": "Puma amawas",
      "imageSrc": "https://images-na.ssl-images-amazon.com/images/I/71oSGl5w10L._AC_UL1500_.jpg",
      "material": "Cotton",
      "color": "Black",
      "sizes": ["S","M","L","XL"],
      "price": 3500
  },
  {
      "id": 3,
      "name": "Puma ash",
      "imageSrc": "https://images.puma.net/images/586965/03/fnd/AUS/w/1000/h/1000/bg/255,255,255",
      "material": "Cotton",
      "color": "Assorted",
      "sizes": ["S","M","L","XL"],
      "price": 2500
  },
  {
      "id": 4,
      "name": "Puma blast",
      "imageSrc": "https://m.media-amazon.com/images/I/61vQYGLUnZL._SX466_.jpg",
      "material": "Cotton",
      "color": "Green",
      "sizes": ["S","M","L","XL"],
      "price": 3500
  },
  {
      "id": 5,
      "name": "Puma future",
      "imageSrc": "https://m.media-amazon.com/images/I/41RiwQGHv8L._SX679_.jpg",
      "material": "Cotton",
      "color": "Black",
      "sizes": ["S","M","L","XL"],
      "price": 2500
  },
  {
      "id": 6,
      "name": "Puma culture",
      "imageSrc": "https://m.media-amazon.com/images/I/61uOvE6idXL._SX679_.jpg",
      "material": "Cotton",
      "color": "Pink",
      "sizes": ["S","M","L","XL"],
      "price": 3500
  },
  {
      "id": 7,
      "name": "Puma Nig",
      "imageSrc": "https://m.media-amazon.com/images/I/61Cb9iX+toL._AC_UL480_FMwebp_QL65_.jpg",
      "material": "Cotton",
      "color": "Black",
      "sizes": ["S","M","L","XL"],
      "price": 3500
  },
  {
      "id": 8,
      "name": "Puma advance",
      "imageSrc": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/670963/43/fnd/IND/fmt/png/PUMA-Power-Colourblock-Hoodie-Youth",
      "material": "Cotton",
      "color": "Black",
      "sizes": ["S","M","L","XL"],
      "price": 5500
  }
];
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})

app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})