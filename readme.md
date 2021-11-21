[![Build Status](https://app.travis-ci.com/Peggymailula/fruit-basket-app.svg?branch=main)](https://app.travis-ci.com/Peggymailula/fruit-basket-app)
# Fruit baskets on order

Samuel has been selling fruit in Cape Town central for years. Due to the changing client behaviour during the COVID-19 pandemic he started to sell variety fruit baskets on pre-orders. Clients will SMS him with the fruits they want in their baskets which his cousin then delivers with his motor bike.

Now that business in picking up taking orders via SMS is getting a but tricky and Samuel wants a small Web App for clients to order fruit baskets.

Help Samuel by creating this app.

## Start here

We have created the Factory Function and Unit tests. Start by deploying the Factory Function to Travis. Add a Travis badge to the readme file.

Next add an Express Web App that allows users to create a Fruit Basket. Users can choose which fruit and how many of each fruit they want in the basket.

Show a list of all the Fruit Baskets - everybody can currently see this.

Deploy your app to Heroku.

### Screencasts

* [Add a basket](https://youtu.be/I2v7kkHCuFI)
* [Add fruits to the basket](https://youtu.be/asUgQQKZtdI)

## Next steps

Add user login support. A user can only see their own baskets. Samuel can see all the fruit basket orders.

Add a status column to the `basket` table supporting these statuses - `ordered`, `accepted`, `rejected`, `ready_to_deliver` ,`delivered`.

Show the order status clearly on the screen.

Samuel would like to be able to accept or reject fruit orders. If an order is `rejected` Samuel would like to write a message to the users. The user can then fix the order and resubmit it.

Show a list of all the orders that is ready for delivery. And allow these orders to be marked as delivered.

### Screencasts

These screencasts will be published soon...

* [User login support](#)
* [Add basket status](#)
* [Accept or reject orders](#)
* [Show orders ready for delivery](#)



