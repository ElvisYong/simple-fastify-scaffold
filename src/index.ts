import app from './app.js';

const start = async () => {
  const server = app({
    logger: {
      transport:
        process.env.Environment === "Develop"
          ? {
            target: "pino-pretty",
            options: {
              colorize: true,
            },
          }
          : undefined,
    },
    bodyLimit: 5242880,
  });

  try {
    await server.listen({ port: 8080, host: "0.0.0.0" });
    server.log.info(`server listening on 0.0.0.0`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
