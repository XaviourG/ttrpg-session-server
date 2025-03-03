const DevRouteHealthCheck = {
  method: "GET",
  url: "/",
  config: {},
  handler: async (request) => {
    return {
      status: 200,
      isHealthy: true,
    };
  },
};

export default DevRouteHealthCheck;
