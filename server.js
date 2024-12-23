const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Sample data (this can come from a database)
let products = [
  {
     id: 1,
     image:"https://i.etsystatic.com/35531138/r/il/6798f2/4922096004/il_1140xN.4922096004_erkv.jpg",
     name: "Embroidered Wedding Cashmere Sweater", 
     rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090
    },

    {
      id: 2,
      image:"https://i.etsystatic.com/18916943/r/il/c45359/6436371642/il_1140xN.6436371642_6yom.jpg",
      name: "Digital Family Couple Portrait, Personalized Gift", 
      rating: {
       stars: 4,
       count: 500
     },
     priceCents: 4095
     },

     {
      id: 3,
      image:"https://i.etsystatic.com/9217970/r/il/f89f10/1532511689/il_1140xN.1532511689_sj95.jpg",
      name: "Personalized Family Peg Dolls", 
      rating: {
       stars: 4.5,
       count: 90
     },
     priceCents: 700
     },

     {
      id: 4,
      image:"https://i.etsystatic.com/6506996/r/il/116f3a/1302412558/il_1140xN.1302412558_8kne.jpg",
      name: "Platinum Art Deco Style Sugarloaf Emerald and Diamond Ring", 
      rating: {
       stars: 5,
       count: 1500
     },
     priceCents: 22000
     },

     {
      id: 5,
      image:"https://i.etsystatic.com/55804005/r/il/cb40f8/6534267855/il_1140xN.6534267855_nz09.jpg",
      name: "Custom Ballerina Duffle Bag, Dance Course Equipment Bag", 
      rating: {
       stars: 3,
       count: 150
     },
     priceCents: 1270
     },

     {
      id: 6,
      image:"https://i.etsystatic.com/27231545/r/il/031139/4140718095/il_794xN.4140718095_mc7l.jpg",
      name: "Personalized Wooden Guitar Picks with Case", 
      rating: {
       stars: 3.5,
       count: 180
     },
     priceCents: 470
     },

     {
      id: 7,
      image:"https://i.etsystatic.com/45275976/r/il/eabb75/6353477775/il_794xN.6353477775_po18.jpg",
      name: "Personalized Baby Girl's Sweater with Hand-Embroidered Name", 
      rating: {
       stars: 5,
       count: 800
     },
     priceCents: 1690
     },

     {
      id: 8,
      image:"https://i.etsystatic.com/32133570/r/il/3f912f/6520835204/il_794xN.6520835204_eh6l.jpg",
      name: "Personalized Muslin Birthday Crown with Baby Name", 
      rating: {
       stars: 4.5,
       count: 1200
     },
     priceCents: 900
     },

     {
      id: 9,
      image:"https://i.etsystatic.com/25291349/r/il/0fe5df/6465827442/il_794xN.6465827442_237t.jpg",
      name: "Baby Boy Gift, New Baby Boy Gift Box, Baby Shower", 
      rating: {
       stars: 3,
       count: 200
     },
     priceCents: 5700
     },

     {
      id: 10,
      image:"https://i.etsystatic.com/17305851/r/il/74d7ec/4356695146/il_794xN.4356695146_npnx.jpg",
      name: "Baby Night Light, Cute Rainbow Night Light", 
      rating: {
       stars: 1,
       count: 12
     },
     priceCents: 890
     },

     {
      id: 11,
      image:"https://i.etsystatic.com/17305851/r/il/389885/5830860965/il_794xN.5830860965_r1x2.jpg",
      name: "Personalized Train With Magnets Toddler Wooden Toy", 
      rating: {
       stars: 5,
       count: 1950
     },
     priceCents: 6800
     },

     {
      id: 12,
      image:"https://i.etsystatic.com/26438282/r/il/376942/6133650562/il_794xN.6133650562_clbp.jpg",
      name: "Musical Wooden Ballerina Carousel Keepsake, Custom Gift", 
      rating: {
       stars: 3,
       count: 20
     },
     priceCents: 650
     },

     {
      id: 13,
      image:"https://i.etsystatic.com/12306789/r/il/9e633f/6147244351/il_794xN.6147244351_kn8p.jpg",
      name: "Beeswax Birthday Candle Set of 10", 
      rating: {
       stars: 4,
       count: 80
     },
     priceCents: 705
     },

     {
      id: 14,
      image:"https://i.etsystatic.com/39440594/r/il/27ae2a/5959779356/il_794xN.5959779356_s6k0.jpg",
      name: "Custom Birth Flower Family Bouquet ", 
      rating: {
       stars: 1,
       count: 18
     },
     priceCents: 490
     },

     {
      id: 15,
      image:"https://i.etsystatic.com/47690950/r/il/8b581c/5871956137/il_794xN.5871956137_lnfa.jpg",
      name: "In My Thirties Era Shirt, 30th Birthday Shirt", 
      rating: {
       stars: 5,
       count: 500
     },
     priceCents: 1830
     },

     {
      id: 16,
      image:"https://i.etsystatic.com/22881962/r/il/6d7703/2731865366/il_794xN.2731865366_9zeb.jpg",
      name: "Pisces Scented Candle | Zodiac | Horoscope", 
      rating: {
       stars: 5,
       count: 970
     },
     priceCents: 2750
     },

     {
      id: 17,
      image:"https://i.etsystatic.com/31688648/r/il/2aa846/4365864269/il_794xN.4365864269_kx1e.jpg",
      name: "ZODIAC SAGITTARIUS Retro Print, Groovy Retro Wall Art", 
      rating: {
       stars: 5,
       count: 1900
     },
     priceCents: 7985
     },

     {
      id: 18,
      image:"https://i.etsystatic.com/9611223/r/il/1fbf71/6553091033/il_794xN.6553091033_k2zc.jpg",
      name: "Personalized Time Capsule Box, 1st Birthday Memory Box", 
      rating: {
       stars: 4.5,
       count: 2900
     },
     priceCents: 15970
     },

     {
      id: 19,
      image:"https://i.etsystatic.com/6748817/r/il/3e5f0c/3081997715/il_794xN.3081997715_h5ix.jpg",
      name: "I Dig You Hand Trowel Wood Plant Pick", 
      rating: {
       stars: 4,
       count: 580
     },
     priceCents: 950
     },

     {
      id: 20,
      image:"https://i.etsystatic.com/27483246/r/il/4321c0/4633974085/il_794xN.4633974085_487t.jpg",
      name: "Embroidered partner T-shirts with initial letters and heart", 
      rating: {
       stars: 5,
       count: 1240
     },
     priceCents: 3295
     },

     {
      id: 21,
      image:"https://i.etsystatic.com/7976576/r/il/53b6f0/4842127848/il_794xN.4842127848_qb4m.jpg",
      name: "Custom Couple Portraits With Pet.", 
      rating: {
       stars: 3,
       count: 18
     },
     priceCents: 320
     },

     {
      id: 22,
      image:"https://i.etsystatic.com/25736608/r/il/d66dcb/3209963287/il_794xN.3209963287_1a0j.jpg",
      name: "Personalized Leather Cufflinks for Men initial", 
      rating: {
       stars: 5,
       count: 3480
     },
     priceCents: 8500
     },

     {
      id: 23,
      image:"https://i.etsystatic.com/5546811/r/il/3e5d37/6382197589/il_794xN.6382197589_rmnc.jpg",
      name: "Personalized Custom 14К Gold with Brushed Matte Finish", 
      rating: {
       stars: 5,
       count: 900
     },
     priceCents: 1300
     },

     {
      id: 24,
      image:"https://i.etsystatic.com/39235430/r/il/166fbb/6559536591/il_794xN.6559536591_d1mg.jpg",
      name: "Three Stone Oval Cut Moissanite Engagement Ring", 
      rating: {
       stars: 1,
       count: 20
     },
     priceCents: 500
     },

     {
      id: 25,
      image:"https://i.etsystatic.com/10286566/r/il/9aef63/6351302609/il_1140xN.6351302609_ex81.jpg",
      name: "Newlyweds Personalised Ornament", 
      rating: {
       stars: 2,
       count: 600
     },
     priceCents: 5600
     },

     {
      id: 26,
      image:"https://i.etsystatic.com/35402666/r/il/a5433d/6264521187/il_794xN.6264521187_sk6x.jpg",
      name: "Handmade Linen Cocktail Napkins", 
      rating: {
       stars: 5,
       count: 60
     },
     priceCents: 960
     },

     {
      id: 27,
      image:"https://i.etsystatic.com/9814413/r/il/826db4/3372567697/il_794xN.3372567697_fkcw.jpg",
      name: "Glass Succulent Ring Dish", 
      rating: {
       stars: 5,
       count: 860
     },
     priceCents: 7950
     },

     {
      id: 28,
      image:"https://i.etsystatic.com/13504856/r/il/d85301/4308590892/il_1140xN.4308590892_2h5z.jpg",
      name: "NEW - Luxury Sage and Gold Wedding Planner Book", 
      rating: {
       stars: 3,
       count: 90
     },
     priceCents: 9610
     },

     {
      id: 29,
      image:"https://i.etsystatic.com/5978400/r/il/ddf55b/4679344105/il_794xN.4679344105_2ifl.jpg",
      name: "Bridesmaid Gift, Personalize Gift", 
      rating: {
       stars: 2,
       count: 330
     },
     priceCents: 7500
     },

     {
      id: 30,
      image:"https://i.etsystatic.com/23291962/r/il/b687e6/6475095392/il_794xN.6475095392_mxll.jpg",
      name: "Grandma's Garden Pillow, Gift for Grandma", 
      rating: {
       stars: 5,
       count: 680
     },
     priceCents: 1540
     },

     {
      id: 31,
      image:"https://i.etsystatic.com/43659964/r/il/3c9082/6424476906/il_794xN.6424476906_a8u2.jpg",
      name: "Memory Box Book-Shaped, Gifts for Couple", 
      rating: {
       stars: 5,
       count: 980
     },
     priceCents: 42000
     },

     {
      id: 32,
      image:"https://i.etsystatic.com/17291636/r/il/30088a/6465409337/il_794xN.6465409337_ix0u.jpg",
      name: "Embroidered In My Auntie Era Custom Sweatshirt", 
      rating: {
       stars: 5,
       count: 680
     },
     priceCents: 1540
     },

     {
      id: 33,
      image:"https://i.etsystatic.com/6748817/r/il/667a33/2933123276/il_1140xN.2933123276_oatz.jpg",
      name: "Mom I Love You Floral Wood Mother's Day Card", 
      rating: {
       stars: 1,
       count: 9
     },
     priceCents: 8000
     },

     {
      id: 34,
      image:"https://i.etsystatic.com/7104210/r/il/591256/5859074368/il_794xN.5859074368_84d3.jpg",
      name: "Custom Birthstone Necklace", 
      rating: {
       stars: 4.5,
       count: 86
     },
     priceCents: 760
     },

     {
      id: 35,
      image:"https://i.etsystatic.com/6748817/r/il/81bcf3/2829993192/il_794xN.2829993192_fyt7.jpg",
      name: "CUSTOM Family Birth Flower Bouquet", 
      rating: {
       stars: 4.5,
       count: 160
     },
     priceCents: 1050
     },

     {
      id: 36,
      image:"https://i.etsystatic.com/53120861/r/il/370f68/6439235768/il_794xN.6439235768_t2my.jpg",
      name: "Personalised Marquise Birthstone Bracelet", 
      rating: {
       stars: 2,
       count: 800
     },
     priceCents: 75000
     },

     
];


// API to fetch all products at the root URL (localhost:3000)
app.get("/", (req, res) => {
  res.json(products);
});

// API to fetch a single product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// API to add a new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});