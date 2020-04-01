const express = require('express');
const routes = express.Router();

//Controllers
const cat = require('./Controllers/UsersController');
const Support = require('./Controllers/Support');
const Questions = require('./Controllers/Questions');
const Matter = require('./Controllers/Matter');
const Documents = require('./Controllers/Documents');

//Users
routes.post('/User', cat.insert);
routes.post('/User/id', cat.selectbyid);
routes.get('/User/all', cat.selectall);
routes.put('/User/', cat.update);
//Support
routes.get('/Support/id/:id', Support.selectIdUser);
routes.get('/Support/type/:id', Support.selectTipo);
routes.get('/Support/all', Support.selectAll);
routes.post('/Support', Support.insert);
//Matter
routes.get('/Matter', Matter.selectAll);
routes.post('/Matter', Matter.insert);
//Questions
routes.post('/Questions', Questions.insert);
routes.get('/Questions', Questions.selectAll);
routes.get('/Questions/search', Questions.searchQuestions);
//Documents
routes.post('/Documents', Documents.insert);
routes.get('/Documents', Documents.selectAll);
routes.get('/Documents/search', Documents.searchDocuments);



module.exports = routes;