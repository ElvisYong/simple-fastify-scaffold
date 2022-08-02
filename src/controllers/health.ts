import {
  FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyPluginAsync,
} from "fastify";

// Endpoint functions
const health = async (server: FastifyInstance, opts: FastifyPluginOptions) => {
  server.get("/health", async (request, reply) => await reply.send({ status: "ok" }));
};

// Register all the plugins from this folder
const routes: FastifyPluginAsync = (async (server: FastifyInstance, opts: FastifyPluginOptions) => {
  server.register(health);
});

export default routes;
