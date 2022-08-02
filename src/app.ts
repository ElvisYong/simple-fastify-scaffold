import { fastify } from 'fastify';
import sensible from "@fastify/sensible";
import cors from '@fastify/cors';
import health from './controllers/health.js';

const app = (opts = {}) => {
  const server = fastify(opts);

  server.register(cors.default);
  server.register(sensible.default);
  server.register(health);

  return server;
};

export default app;
