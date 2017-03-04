const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./userCtrl.js');

var app = express();
var port = 3000;

app.use(bodyParser.json());

app.get('/api/users', function(req, res){
    if (req.query.age){
        return res.status(200).send(ctrl.getUsersByAgeLimit(req.query.age))
    }else if(req.query.lastname){
        return res.status(200).send(ctrl.findUserByQuery('last_name', req.query.lastname));
    }else if(req.query.email){
        return res.status(200).send(ctrl.findUserByQuery('email', req.query.email))
    }else{
        return res.status(200).send(ctrl.readAll()) 
    }
})
app.get('/api/users/:id', function(req, res){
    let user = ctrl.findUserById(req.params.id);
    let error = 'user not found'
    if(user){
        return res.status(200).send(user);
    }else{
        return res.status(404).send(error);
    }
})
app.get('/api/admins', function(req, res){
    res.status(200).send(ctrl.getAdmins());
})
app.get('/api/nonadmins', function(req, res){
    res.status(200).send(ctrl.getNonAdmins());
})
app.post('/api/users', function(req, res){
    res.status(200).send(ctrl.createUser(req.body));
})
app.put('/api/users/:id', function(req, res){
    res.status(200).send(ctrl.updateUser(req.params.id, req.body))
})
app.delete('/api/users/:id', function(req, res){
    res.status(200).send(ctrl.removeUser(req.params.id))
})

// app.listen(port, function(){
//     console.log('listening on port', port)
// })