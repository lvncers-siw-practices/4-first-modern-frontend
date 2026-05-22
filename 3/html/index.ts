import index from "./index.html";

const server = Bun.serve({
  port: process.env.PORT ? Number(process.env.PORT) : 5173,
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
