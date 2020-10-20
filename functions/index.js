const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HblAUFSxT0HvxHa49Q7K9C6tJWDGOfqXliMGEftW78OMSpIiJbmVSoOpGvbeOqUk5s3fmuojsTuJXvqfk9cEU7N008o8Ukceb");

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//Api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment reuest boom!!!", total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

//endpoint
// http://localhost:5001/challenge-5faf6/us-central1/api 
// http://localhost:5001/challenge-5faf6/us-central1/api
