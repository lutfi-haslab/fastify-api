const app = require('fastify')({
  logger: true
})

const routes = require("./routes/hello-world.js")

app.register(routes);

/**
 * Run the server!
 */

const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
