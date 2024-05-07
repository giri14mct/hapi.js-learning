const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Hello from HapiJS!";
    },
  });

  server.route({
    method: "GET",
    path: "/movies",
    handler: (req, h) => {
      return "List Of All movies";
    },
  });

  server.route({
    method: "POST",
    path: "/movies",
    handler: (req, h) => {
      return `${req.payload.name} Movie Created`;
    },
  });

  server.route({
    method: "PUT",
    path: "/movies/{id}",
    handler: (req, h) => {
      return `${req.params.id} Movie Updated`;
    },
  });

  server.route({
    method: "DELETE",
    path: "/movies/{id}",
    handler: (req, h) => {
      return `${req.params.id} Movie Deleted`;
    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

init();
