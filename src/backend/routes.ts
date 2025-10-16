import index from "../frontend/index.html";

// Cache para archivos estáticos
const robotsCache = await Bun.file("./src/backend/robots.txt").text();
const faviconCache = await Bun.file("./src/frontend/assets/favicon.ico").bytes();

export const routes = {
  "/*": index,
  "/robots.txt": () => new Response(robotsCache, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache por 24 horas
    },
  }),
  "/favicon.ico": new Response(faviconCache, {
    headers: {
      "Content-Type": "image/x-icon",
    },
  }),

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
