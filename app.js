const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middlewares/auth");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
    "mongodb+srv://saidazim:test123@cluster0.mhvu77y.mongodb.net/?retryWrites=true&w=majority";
// mongoose.set("strictQuery", false);
// mongoose.set("strictQuery", true);
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", requireAuth, (req, res) => res.render("smoothies"));
app.use(authRoutes);

// for getting products from database
const Product = require("./models/Product");
app.get("/products", requireAuth, async (req, res) => {
    const productsData = await Product.find({});
    res.render("products", { products: productsData });
});

// new product
app.get("/newproduct", requireAuth, (req, res) => res.render("new"));
app.post("/newproduct", requireAuth, async (req, res) => {
    const { title, price } = req.body;
    try {
        const product = await Product.create({
            title,
            price,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIcQXMnyVDnLvbw7SB0N5gqpEFhYyeSF2jA&usqp=CAU",
        });
        res.status(201).json({ product: product._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors }); // Make sure to always send the "errors" property
    }
});

// handles errors
function handleErrors(err) {
    console.log(err.message);
    let errors = { title: "", price: "Please, enter a number for price" };

    return errors;
}
