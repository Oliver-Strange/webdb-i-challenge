const express = require("express");

const accountsDb = require("./data/accounts-model");
const server = express();
server.use(express.json());

// GET
server.get("", async (req, res) => {
  try {
    const accounts = await accountsDb.find();
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error getting accounts" });
  }
});

// GET by Id
server.get("", async (req, res) => {
  try {
    const account = await accountsDb.findById(req.params.id);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ message: "account not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

// POST
server.post("", async (req, res) => {
  try {
    const account = await accountsDb.add(req.body);
    res.status(201).json(account);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error adding account" });
  }
});

// PUT
server.put("", async (req, res) => {
  try {
    const account = await accountsDb.put(req.params.id, req.body);
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(404).json({ message: "account not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error updating account" });
  }
});

// DELETE
server.delete("", async (req, res) => {
  try {
    const account = await accountsDb.remove(req.params.id);
    if (account) {
      res.status(200).json({ message: "account deleted" });
    } else {
      res.status(404).json({ message: "account could not be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = server;