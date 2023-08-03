# Exercício de Avaliação - Serviço de Venda e Aluguel de Carros

## Descrição do Exercício

Você deve criar um serviço de venda e aluguel de carros. Este serviço deve ser construído utilizando Node.js com o framework Express. O banco de dados deve ser PostgreSQL e a comunicação com o banco de dados deve ser feita através do ORM Prisma. A autenticação deve ser implementada com JWT (jsonwebtoken), utilizando tanto access tokens quanto refresh tokens.

### Requisitos Funcionais

1. Registro de usuários (POST apiusers) - Função registerUser
2. Autenticação de usuários (POST apiauthlogin) - Função loginUser
3. Atualização do token (POST apiauthrefresh) - Função refreshToken
4. Cadastro de carros (POST apicars) - Função registerCar
5. Listagem de carros com filtragem por nome, marca, preço e categoria (GET apicars) - Função listCars
6. Compra e aluguel de carros (POST apicarscarIdbuy, POST apicarscarIdrent) - Funções buyCar, rentCar
7. Upload de imagens para um carro (POST apicarscarIdimages) - Função uploadCarImage
8. Geração de relatórios (POST apireports) - Função generateReport

### Requisitos Não Funcionais

1. Usar CORS para lidar com CORS.
2. Usar Multer para lidar com upload de arquivos.
3. Usar pdfmake e chartjs-node-canvas para gerar relatórios em PDF.
4. Usar Nodemailer para enviar emails.
5. Usar Morgan para lidar com logs.
6. Usar Zod para lidar com validações.
7. Implementar três perfis de acesso (admin, cliente, usuário).
8. Usar Docker Compose para subir a aplicação e o banco de dados.
9. Implementar middleware para lidar com a paginação nas rotas que listam dados.

### Modelo de banco de dados

Você deve criar os seguintes modelos no Prisma

Modelo User
- id número, chave primária, autoincremento
- nome texto
- email texto, único
- senha texto
- perfil enum (ADMIN, CLIENTE, USUÁRIO)

Modelo Car
- id número, chave primária, autoincremento
- nome texto
- marca texto
- preço decimal
- categoria texto
- imagem texto

Modelo RefreshToken
- id número, chave primária, autoincremento
- hashedToken texto, único
- userId número, chave estrangeira para User
- revoked booleano, padrão falso
- createdAt data e hora, auto preenchido na criação
- updatedAt data e hora, auto preenchido na atualização

### Arquivo Docker Compose

Deve haver um arquivo `docker-compose.yml` para iniciar a aplicação e o banco de dados no Docker.

## Critérios de Avaliação

1. Implementação do modelo de banco de dados
2. Implementação de autenticação e autorização
3. Rota de registro de usuário
4. Rota de autenticação de usuário
5. Rota de atualização do token
6. Rota de cadastro de carro
7. Rota de listagem de carros com implementação de paginação
8. Rotas de compra e aluguel de carros
9. Rota de upload de imagens
10. Rota de geração de relatórios
11. Implementação do middleware de paginação
12. Testes unitários
13. Integração com Front-end

## Instruções de Entrega

Adoraríamos ver o seu trabalho pronto! Por favor, compartilhe conosco um link para um repositório no GitHub que contém todo o seu código do projeto ou pode utilizar esse mesmo repositório. Seu repositório deve incluir um arquivo README, com instruções claras sobre como instalar, configurar e colocar o projeto para funcionar, incluindo os passos para configurar e iniciar o Docker Compose.

Sabemos que imprevistos podem acontecer, mas tentamos manter um prazo para a entrega do projeto. Se, por algum motivo, você precisar de um tempo extra, só tenha em mente que a pontuação final pode ser ajustada, sendo descontado um ponto para cada dia de atraso.

Queremos que você brilhe! Sua avaliação será baseada na implementação correta de todos os requisitos acima. Mas não se preocupe, se algum requisito ficar de fora, a penalidade será proporcional e justa. Valorizamos muito a qualidade do código e as boas práticas de programação, como a escolha de nomes claros para as variáveis e a inclusão de comentários explicativos quando necessário. A organização do código e a limpeza também contarão pontos a seu favor!

Desejamos a você um ótimo trabalho e estamos muito animados para ver o que você vai criar. Boa sorte!


## Diagrama de Fluxo do Processo

[![](httpsmermaid.inkimgpakoeNqFVE1P20AQ_SujPQeUD0hiHyqFQCk0LZAAlerkMLU3zgp711rbqOTjx1Q9VD1XvfSaP9bZtYMdOGD5sON9782bmfWumK8CzlwWakwWMBpPJdAz8O7SfPtDCwUphzEPRZppnMHBwTs4qfbmuISRCoWcFbQTCxh6A9_naQqZeuASDH-ueboo43T7U0HINQYqLXlDyztdXXM9FxEECnYpNgXg1ADWgyAWcg1nnl2AjwEaW7TQ-lnrzGq9f8ZozUMEEWPIZWqkLXoPfF6CjSnQPMJs-4dy7xTPLeiDN652iiK4fBSmCkiUBn4Qo4hmdb_DSHCZ8TVceOUSfBUnlETlgFEevrBesHalr-Gy6nREA0BqJbXnVcWX1t_HCpxnIhJLhARpNLj9RV73Gj3y9iey_Q2oY1xySdWUyJFFfnqNzFMCkTS5wCxHk0gD1ga-J_D5hUBCp42OlKY2P6qwSlcM4sobkNu_nObEAe1MbKN1eQBp3iCp35EKd8VfWOJ1neiXvX6LWvTtpk7Nn0_9G9wryx17w6vxxHSFUFlVzXWxWwQ39WBsg4l3q4woveS0SGAzPlI_AxPO6vDbCo6lV4vGPCO68GuEW0u484aKdFXEbSPNbBR8w5Sb0fEYEvOfpca3iJOIx6RSmb-zEvfehMsF7p0NNGpzRSGNMMzpQigY95bxxbikLtFb_Auly-0_KXw6rKzBYk5cEdB1szLMKcsWlHzKXFoGqB-mbCo3hKPC1ORJ-szNdM4bLE8CzPipQLqlYubOMUrpa4Lyq1LxDkQhc1fsO3O7ncNmu-c4Lad91Ot0nW63wZ6Y2-r0DvvOUZOe1lGne9xubxpsaRWah_3jZqvjtHstx-l1-_3jBuOByJT-VFyP9pbc_AeyU8HJtype=png)](httpsmermaid.liveedit#pakoeNqFVE1P20AQ_SujPQeUD0hiHyqFQCk0LZAAlerkMLU3zgp711rbqOTjx1Q9VD1XvfSaP9bZtYMdOGD5sON9782bmfWumK8CzlwWakwWMBpPJdAz8O7SfPtDCwUphzEPRZppnMHBwTs4qfbmuISRCoWcFbQTCxh6A9_naQqZeuASDH-ueboo43T7U0HINQYqLXlDyztdXXM9FxEECnYpNgXg1ADWgyAWcg1nnl2AjwEaW7TQ-lnrzGq9f8ZozUMEEWPIZWqkLXoPfF6CjSnQPMJs-4dy7xTPLeiDN652iiK4fBSmCkiUBn4Qo4hmdb_DSHCZ8TVceOUSfBUnlETlgFEevrBesHalr-Gy6nREA0BqJbXnVcWX1t_HCpxnIhJLhARpNLj9RV73Gj3y9iey_Q2oY1xySdWUyJFFfnqNzFMCkTS5wCxHk0gD1ga-J_D5hUBCp42OlKY2P6qwSlcM4sobkNu_nObEAe1MbKN1eQBp3iCp35EKd8VfWOJ1neiXvX6LWvTtpk7Nn0_9G9wryx17w6vxxHSFUFlVzXWxWwQ39WBsg4l3q4woveS0SGAzPlI_AxPO6vDbCo6lV4vGPCO68GuEW0u484aKdFXEbSPNbBR8w5Sb0fEYEvOfpca3iJOIx6RSmb-zEvfehMsF7p0NNGpzRSGNMMzpQigY95bxxbikLtFb_Auly-0_KXw6rKzBYk5cEdB1szLMKcsWlHzKXFoGqB-mbCo3hKPC1ORJ-szNdM4bLE8CzPipQLqlYubOMUrpa4Lyq1LxDkQhc1fsO3O7ncNmu-c4Lad91Ot0nW63wZ6Y2-r0DvvOUZOe1lGne9xubxpsaRWah_3jZqvjtHstx-l1-_3jBuOByJT-VFyP9pbc_AeyU8HJ)

## Diagrama Entidade Relacionamento

[![](httpsmermaid.inkimgpakoeNqdUktvwjAM_iuRzwVR-oLepu2ywy57XCYkFBpDI9oEuek2VvrfZ1o2XpMmLYfE9vfF_mS7gcwqhBSQ7rRckSxnRvB5qZDEbjcY7BrxiEvCKn-2azQiFbmsLji2EbeSGCI0rppbmi_q7Smp6e390cYJrY5-5UiblTCyxKsgllIXV9GNrKp3Syc50NSl2JBd6uKQpO2fvap_1l6QNCdUhZkuZcFVdHZNzqTDlaXtFcB_VueSzpr5tzZudo6qYx-xhbUFSsPtfmPgVCXrcLpEkRGyqW7cL1i9UZdYN6Sar3v1IxY8KJF4Aoq3oxM6A5cjtwpSNpWk9QxmpmWerJ192poMUkc1etBXOOwTpEtZVBzdSPNqbflNYhfSBj4gTfxhkkTTKEzCcRKz4cEW0oEfDad-4IdRHMVxHIwnSevBZ5dhNJxGkySJR-PJOA6DIIw9QKWdpYd-m7ulbr8ATWjcmwtype=png)](httpsmermaid.liveedit#pakoeNqdUktvwjAM_iuRzwVR-oLepu2ywy57XCYkFBpDI9oEuek2VvrfZ1o2XpMmLYfE9vfF_mS7gcwqhBSQ7rRckSxnRvB5qZDEbjcY7BrxiEvCKn-2azQiFbmsLji2EbeSGCI0rppbmi_q7Smp6e390cYJrY5-5UiblTCyxKsgllIXV9GNrKp3Syc50NSl2JBd6uKQpO2fvap_1l6QNCdUhZkuZcFVdHZNzqTDlaXtFcB_VueSzpr5tzZudo6qYx-xhbUFSsPtfmPgVCXrcLpEkRGyqW7cL1i9UZdYN6Sar3v1IxY8KJF4Aoq3oxM6A5cjtwpSNpWk9QxmpmWerJ192poMUkc1etBXOOwTpEtZVBzdSPNqbflNYhfSBj4gTfxhkkTTKEzCcRKz4cEW0oEfDad-4IdRHMVxHIwnSevBZ5dhNJxGkySJR-PJOA6DIIw9QKWdpYd-m7ulbr8ATWjcmw)

## Middleware de Paginação

Você deve criar um middleware para lidar com a paginação das listagens na API. Esse middleware deve ser capaz de ler os parâmetros page e limit da query string da requisição e adicionar essas informações em um objeto no objeto req, da seguinte forma

javascript
export const handlePagination = (req, res, next) = {
  const { page, limit } = req.query;

  if (page && !Number.isInteger(+page)) {
    throwError('Invalid Page');
    return;
  }

  const currentPage = Number(page)  1;
  const listPerPage = Number(limit)  5;
  const offset = (currentPage - 1)  listPerPage;

  req.pagination = { currentPage, listPerPage, offset };

  next();
};