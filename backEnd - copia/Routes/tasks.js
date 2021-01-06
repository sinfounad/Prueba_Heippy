const Router = require('express').Router();
const mongojs = require ('mongojs');
const db = mongojs('bdBA', ['tasks']);
const dbm = mongojs('bdBA', ['mails']);
const dbc= mongojs('bdBA', ['contactos']);
const bodyparser=require('body-parser');
const express = require('express');

//const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
//app.engine('.html', cons.jade);
app.set('view engine', 'html');

app.use(bodyparser.urlencoded({extended :false}))
app.use(bodyparser.json())
app.use('/public', express.static(path.join(__dirname, 'public')));

Router.get('/task', (req, res, next )=>{
    dbc.contactos.find((err, contactos)=>{
    if (err) return next(err);
    
    res.json(contactos);
    console.log(contactos);
    });
    
});

Router.get('/fact', (req, res, next )=>{
    dbc.contactos.find((err, contactos)=>{
    if (err) return next(err);
  
    res.json(contactos);
    console.log(contactos);
    });
    
});

Router.get('/task/:id', (req, res, next )=>{
    dbc.contactos.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task)=>{
    if (err) return next(err);
    res.json(task);
    });
    
});

Router.post('/fact', (req, res, next)=>{

  const fact =req.body;
  if(!fact.nombre || !(fact.documento + '')){
      res.status(400).json({
        error: 'Bad data'
      });
  }else{

      dbc.contactos.save(fact, (err, task) => {
          
          if (err) return next(err);
          res.json(task);
          console.log("postw");

      });
  }
  
});

Router.post('/task', (req, res, next)=>{

    const task =req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400).json({
          error: 'Bad data'
        });
    }else{

        dbc.contactos.save(task, (err, task) => {
            
            if (err) return next(err);
            res.json(task);
            console.log("post");

        });
    }
    
});




Router.post('/Delete', function (req,  res) {
    console.log("entra2");
  var id = req.body._id;

    //var id = req.params;
    //console.log(id.title);
    var id2="5e800862a184533dfcfe0a1e";
   console.log(id);
   dbc.contactos.remove({ _id: db.ObjectId(id) }, function(e, results){console.log(results);
  
});

  });



Router.put('/update',(req, res, next)=>{
    const task = req.body;
   
    console.log(task.nombre)
    dbc.contactos.update( { _id: db.ObjectId(task._id) }, {$set: { "nombre" : task.nombre, "documento": task.documento, "celular": task.celular, "direccion": task.direccion, "cumple":task.cumple, "cumpleSF":task.cumpleSF}});
    
});

module.exports = Router;