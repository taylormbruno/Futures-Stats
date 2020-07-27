const path = require("path");
const router = require("express").Router();

router.use(function(req, res) {
    // If no API routes are hit, send the React app
    if (process.env.NODE_ENV === "production") {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    } else {
      res.sendFile(path.join(__dirname, "../client/public/index.html"));
    }
  });
  
  module.exports = router;