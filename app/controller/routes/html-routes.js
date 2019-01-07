module.exports = (app, db) => {
    app.get('/', (req, res) => {
        db.burger.findAll().then(burgers => {
            app.locals.uneaten = [];
            app.locals.eaten = [];
            let eatenCount = 0, uneatenCount = 0;
            for (let i = 0; i < burgers.length; i++) {
                if (burgers[i].devoured) {
                    console.log(eatenCount);
                    app.locals.eaten[eatenCount] = {}
                    app.locals.eaten[eatenCount].name = burgers[i].dataValues.burgerName;
                    app.locals.eaten[eatenCount].id = burgers[i].dataValues.id;
                    eatenCount++;
                } else {
                    app.locals.uneaten[uneatenCount] = {};
                    app.locals.uneaten[uneatenCount].name = burgers[i].dataValues.burgerName;
                    app.locals.uneaten[uneatenCount].id = burgers[i].dataValues.id;
                    uneatenCount++;
                }
            }
            res.status(200).render('index', {
                eaten: app.locals.eaten,
                eatenIds: app.locals.eatenIds,
                uneaten: app.locals.uneaten,
                uneatenIds: app.locals.uneatenIds,

            });
        }).catch(err => {
            console.log(err);
        });
    });

    app.get('*', (req, res) => {
        res.status(404).send('File not found');
    });
};