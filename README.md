# Aplicação
1. abra o cmd
1. acesse a pasta com cmd
1. use o comando Yarn dev

Conexão:
127.0.0.1:7844
##//Users  
routes.post('/User', cat.insert);  
routes.post('/User/id', cat.selectbyid);  
routes.get('/User/all', cat.selectall);  
routes.put('/User/', cat.update);  
##//Support  
routes.get('/Support/id/:id', Support.selectIdUser);  
routes.get('/Support/type/:id', Support.selectTipo);  
routes.get('/Support/all', Support.selectAll);  
routes.post('/Support', Support.insert);  
##//Matter  
routes.get('/Matter', Matter.selectAll);  
routes.post('/Matter', Matter.insert);  
##//Questions  
routes.post('/Questions', Questions.insert);  
routes.get('/Questions', Questions.selectAll);    
routes.get('/Questions/search', Questions.searchQuestions);  
##//Documents  
routes.post('/Documents', Documents.insert);  
routes.get('/Documents', Documents.selectAll);  
routes.get('/Documents/search', Documents.searchDocuments);  
