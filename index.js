const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/fruit_webapp'
const pool = new Pool({
	connectionString,
	ssl: {
	  rejectUnauthorized: false,
	},
  });
const Fruits = require("./fruit-basket-service");
const FruitBasket = Fruits(pool);
// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

// console.log(exphbs);
const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

let counter = 0;

app.get('/', async function(req, res) {
	const baskets = await FruitBasket.listBaskets();
	res.render('index', {
		baskets
	});
});

app.get('/basket/add', function(req, res) {
	res.render('basket/add');
});

app.post('/basket/add',async function(req, res){
await	FruitBasket.createBasket(req.body.basket_name);
res.redirect('/');
});

app.get('/basket/edit/:id',async function(req, res) {
	const basketId = req.params.id;
	const basket = await FruitBasket.getBasket(basketId);
	const fruits = await FruitBasket.listFruits();
	const basketItems =await FruitBasket.getBasketItems(basketId);
		res.render('basket/edit',{
			basket,
			fruits,
			basketItems
		});
});

app.post('/basket/update/:id',async function(req, res) {
	const basketId = req.params.id;
	const qty = req.body.qty;
	const fruit_id = req.body.fruit_id;

	await FruitBasket.addFruitToBasket(fruit_id,basketId,qty);
	res.redirect(`/basket/edit/${basketId}`)
	
});
// app.post('/count', function(req, res) {
// 	counter++;
// 	res.redirect('/')
// });


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});