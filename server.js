const express = require('express');
const pug = require('pug');

const db = require('./app/models');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '/app/views')));
app.set('views', './app/views/pug');
app.set('view engine', 'pug');

require('./app/controller/routes/api-routes.js')(app, db);
require('./app/controller/routes/html-routes.js')(app, db);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log('App listening on PORT ' + PORT);
    });
});
