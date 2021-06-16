const jsonServer=require('json-server');
const server=jsonServer.create();
const router=jsonServer.router('https://teddy-bear-db-api.herokuapp.com/Teddies');
const middlewares=jsonServer.defaults();
const port=process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
