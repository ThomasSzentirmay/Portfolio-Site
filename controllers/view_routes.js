const router = require('express').Router();

// Show home page
router.get('/index', async (req, res) => {
    res.render('about', {
    });
  });