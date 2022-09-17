// dependencies
const express = require("express");
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// parsing data
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}.`);
  });