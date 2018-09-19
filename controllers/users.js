module.exports.controller = (app) => { 
    // get users page 
    app.get('/users', (req, res) => { 
        res.render('users', { 
            title: 'Users',
            description: 'Yet another Javascript full stack technology',});
        }) 
}