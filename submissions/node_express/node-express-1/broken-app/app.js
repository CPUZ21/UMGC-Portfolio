const express = require('express');
let axios = require('axios');
var app = express();
app.use(express.json());

app.post("/", function (req, res, next) {
  try {
    const developers = req.body.developers;
    let promises = [];
    developers.map((d) => {
      promises.push(axios.get(`https://api.github.com/users/${d}`));
    });

    Promise.all(promises).then((responses) => {
      let out = responses.map((r) => ({
        name: r.data.name,
        bio: r.data.bio,
      }));

      return res.send(out);
    });
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
