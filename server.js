const express = require("express");

const accountsDb = require("./data/accounts-model");
const server = express();

// GET
server.get("", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// GET by Id
server.get("", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// POST
server.post("", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// PUT
server.put("", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// DELETE
server.delete("", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

module.exports = server;
