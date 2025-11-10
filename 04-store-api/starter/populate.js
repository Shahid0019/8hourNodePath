require("dotenv").config();

const { process_params } = require("express/lib/router");
const connectDB = require("./db/connect");

const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();

    await Product.create(jsonProducts);
    console.log("successsss");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};
start();
