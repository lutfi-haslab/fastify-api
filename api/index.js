import Fastify from "fastify";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
import RoutesIndex from "./routes/hello-world.js";
import RoutesIoT from "./routes/iot-api.js";

dotenv.config();
// Instantiate Fastify with some config
const app = Fastify({
  logger: true,
});

app.register(cors, {
  origin: "*",
});
app.register(RoutesIndex);
app.register(RoutesIoT);

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

export default start();
