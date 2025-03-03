import { initializeRoutes } from "./infrastructure/routing.js";
import { initializeServer } from "./infrastructure/server.js";

const server = initializeServer();
initializeRoutes(server);
