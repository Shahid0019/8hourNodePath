const logger = require('./logger');
const authorize = require('./authorize');
// req  => middleware => res

// 1.use vs route1
// 2. option -our own /express / third party 



// app.use([authorize,logger]);



app.get('/',  (req, res) => { 
res.send('Home Page');
});
app.get('/about', (req, res) => { 
res.send('About Page');
});
app.get('/api/products',  (req, res) => { 
res.send('Products Page');
});
app.get('/api/items',  (req, res) => { 
res.send('Items Page');
});

