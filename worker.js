// worker.js
export default {
    async fetch(request, env, ctx) {
      return new Response("Giphy MCP Server", { status: 200 });
    }
  };