var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

mongoose.connection.collections['products'].drop();

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game1',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game2',
        price: 20
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game3',
        price: 30
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game4',
        price: 40
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game5',
        price: 50
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic',
        description: 'game6',
        price: 60
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}