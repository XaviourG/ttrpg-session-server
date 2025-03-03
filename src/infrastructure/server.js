import Fastify from "fastify";

const startServer = async (server) => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

export const initializeServer = () => {
  const server = Fastify({
    logger: true,
  });
  startServer(server);
  return server;
};
