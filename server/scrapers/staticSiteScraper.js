const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pretty = require("pretty");
const axios = require("axios");
const { contains } = require("cheerio");

const dataDir = path.json(__dirname, "../data/");

const url =
  "https://www.ishopping.pk/electronics/laptops-computers/laptop.html";

const scrapeStaticWebpage = async () => {
  try {
    const { data } = await axios.get(url);
    processData(data);
  } catch (err) {
    console.log("error", err);
  }
};
