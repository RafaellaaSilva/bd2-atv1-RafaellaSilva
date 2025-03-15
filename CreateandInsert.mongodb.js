//Insert

const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": "01",
            "nome": "Lucas Ferreira",
            "cpf": "01234567890",
            "rg": "123456789",
            "telefone_aluno": "11987654321",
            "telefone_responsavel": "11912345678",
            "email": "lucas.ferreira@email.com",
            "data_nasimento": "2005-04-15"
          },
          {
            "cod_aluno": "02",
            "nome": "Mariana Souza",
            "cpf": "12345678901",
            "rg": "234567890",
            "telefone_aluno": "11998765432",
            "telefone_responsavel": "11911234567",
            "email": "mariana.souza@email.com",
            "data_nascimento": "2006-08-22"
          },
          {
            "cod_aluno": "03",
            "nome": "Gabriel Oliveira",
            "cpf": "23456789012",
            "rg": "345678901",
            "telefone_aluno": "11987123456",
            "telefone_responsavel": "11912346789",
            "email": "gabriel.oliveira@email.com",
            "data_nascimento": "2004-12-10"
          },
          {
            "cod_aluno": "04",
            "nome": "Ana Clara Lima",
            "cpf": "34567890123",
            "rg": "456789012",
            "telefone_aluno": "11976543210",
            "telefone_responsavel": "11923456789",
            "email": "ana.lima@email.com",
            "data_nascimento": "2007-06-05"
          },
          {
            "cod_aluno": "05",
            "nome": "João Pedro Almeida",
            "cpf": "4578901234",
            "rg": "567890123",
            "telefone_aluno": "11965432109",
            "telefone_responsavel": "11934567890",
            "email": "joao.almeida@email.com",
            "data_nascimento": "2003-09-28"
          },
          {
            "cod_aluno": "06",
            "nome": "Beatriz Santos",
            "cpf": "56789012345",
            "rg": "678901234",
            "telefone_aluno": "11954321098",
            "telefone_responsavel": "11945678901",
            "email": "beatriz.santos@email.com",
            "data_nascimento": "2005-11-14"
          },
          {
            "cod_aluno": "07",
            "nome": "Matheus Rodrigues",
            "cpf": "67890123456",
            "rg": "789012345",
            "telefone_aluno": "11943210987",
            "telefone_responsavel": "11956789012",
            "email": "matheus.rodrigues@email.com",
            "data_nasscimento": "2006-03-30"
          },
          {
            "cod_aluno": "08",
            "nome": "Larissa Costa",
            "cpf": "78901234567",
            "rg": "890123456",
            "telefone_aluno": "11932109876",
            "telefone_responsavel": "11967890123",
            "email": "larissa.costa@email.com",
            "data_nascimento": "2004-07-07"
          },
          {
            "cod_aluno": "09",
            "nome": "Vinícius Martins",
            "cpf": "89012345678",
            "rg": "901234567",
            "telefone_aluno": "11921098765",
            "telefone_responsavel": "11978901234",
            "email": "vinicius.martins@email.com",
            "data_nascimento": "2007-02-02"
          },
          {
            "cod_aluno": "10",
            "nome": "Camila Pereira",
            "cpf": "90123456789",
            "rg": "012345678",
            "telefone_aluno": "11910987654",
            "telefone_responsavel": "11989012345",
            "email": "camila.pereira@email.com",
            "data_nascimento": "2003-05-19"
          }
    ]
);


