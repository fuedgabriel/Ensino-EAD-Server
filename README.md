## 🎇Instructions

1. abra o cmd  
2. acesse a pasta com cmd  
3. use o comando Yarn dev  


## Connection

|  Users                                                       | `Support`                                                       | Matter                                   |
| -------------------------------------------------------------| -------------------------------------------------------------- | ---------------------------------------- |
| routes.post('/User', cat.insert);                            | routes.get('/Support/id/:id', Support.selectIdUser);           | routes.get('/Matter', Matter.selectAll); |
| routes.post('/User/id', cat.selectbyid);                     | routes.get('/Support/type/:id', Support.selectTipo);           | routes.post('/Matter', Matter.insert);   |
| routes.get('/User/all', cat.selectall);                      | routes.get('/Support/all', Support.selectAll);                 |                                          |
| routes.put('/User/', cat.update);                            | routes.post('/Support', Support.insert);                       |                                          |
| `Questions`                                                  | `Documents`                                                    | `NULL`                                 |
| routes.post('/Questions', Questions.insert);                 | routes.post('/Documents', Documents.insert);                   |                                          |
| routes.get('/Questions', Questions.selectAll);               | routes.get('/Documents', Documents.selectAll);                 |                                          |
| routes.get('/Questions/search', Questions.searchQuestions);  | routes.get('/Documents/search', Documents.searchDocuments);    |                                          |

# 127.0.0.1:7844  
