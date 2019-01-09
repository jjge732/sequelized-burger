module.exports = (app, db) => {
    app.post('/api/burgers/', (req, res) => {
        db.burger.create({
            burgerName: req.body.burger
        }).then(burger => {
            res.send('Success');
        }).catch(err => {
            console.log(err);
        })
    });

    app.put('/api/burgers/', (req, res) => {
        db.burger.update({
            devoured: true 
        }, {
            where: {
                id: req.body.burgerId
            }
        }).then(burger => {
            res.send('Eaten');
        }).catch(err => {
            console.log(err);
        })
    })

    db.burger.findAll().then(burgers => {
        app.locals.uneaten = [];
        app.locals.eaten = [];
        let eatenCount = 0, uneatenCount = 0;
        for (let i = 0; i < burgers.length; i++) {
            if (burgers[i].devoured) {
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
    }).catch(err => {
        console.log(err);
    })
}