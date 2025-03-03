import DevRouteHealthCheck from "../collections/dev/routes/health-check.js";

const ROUTE_LIST = [DevRouteHealthCheck];

export const initializeRoutes = (server) => {
  try {
    ROUTE_LIST.forEach((route) => {
      server.route(route);
    });
  } catch (error) {
    console.error("Failed to initialize routes");
    throw error;
  }
};
