// Listing

const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].find();

// Listando buscando CPF
db['bd3-nosql-atv1'].find({"cpf": "67890123456"});

// Listando buscando CPF e tirando o Codigo do aluno de exibição
db['bd3-nosql-atv1'].find({"cpf": "67890123456"}, {"cod_aluno": 0});
