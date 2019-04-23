const axios = require('axios');

module.exports = function (app) {
  app.get('/weather/:latitude/:longitude', (req, res) => {
    const secret = process.env.DARK_SKY_SECRET;
    const url = `https://api.darksky.net/forecast/${secret}/${req.params.latitude},${req.params.longitude}?units=si`;

    axios.get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => console.log('error occured API weather call', error))
  });
};