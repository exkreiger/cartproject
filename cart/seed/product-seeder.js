var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/store');

var products = [
    new Product({
        imagePath: 'https://www.lg.com/us/images/tv-audio-video-accessories/md05883596/gallery/large01.jpg',
        title: 'LG Remote',
        description: 'Magic Remote Control',
        price: '25'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/311Mllm3s-L._SL500_AC_SS350_.jpg',
        title: 'Sony Remote',
        description: 'Universal Remote Control',
        price: '35'
    }),
    new Product({
        imagePath: 'https://www.bhphotovideo.com/images/images2500x2500/sony_rmtdslr2_wireless_remote_commander_916138.jpg',
        title: 'Sony Remote',
        description: 'Camcorder Remote Control',
        price: '15'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/71EigmMfn1L._SX466_.jpg',
        title: 'Samsung Remote',
        description: 'TV Remote Control',
        price: '45'
    }),
    new Product({
        imagePath: 'https://res.cloudinary.com/dtk4ybaqk/image/private/t_wm_partmaster_420/prod/wtifuzhzgajztmtt8emr.jpg',
        title: 'Samsung Remote',
        description: 'Smart TV Remote Control',
        price: '50'
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61Op-MqMWAL._SX425_.jpg',
        title: 'Toshiba Remote',
        description: 'Universal HDTV Remote Control',
        price: '20'
    })
];

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}