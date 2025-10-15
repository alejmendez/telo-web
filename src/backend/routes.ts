import index from "../frontend/index.html";

export const routes = {
  "/*": index,

  "/api/hello": {
    async GET(req: Request) {
      return Response.json({
        message: "Hello, world!",
        method: "GET",
      });
    },
    async PUT(req: Request) {
      return Response.json({
        message: "Hello, world!",
        method: "PUT",
      });
    },
  },

  "/api/hello/:name": async (req: Request) => {
    const name = (req as any).params.name;
    return Response.json({
      message: `Hello, ${name}!`,
    });
  },
};
