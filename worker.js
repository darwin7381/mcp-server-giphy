import { server } from './dist/server';

export default {
  async fetch(request, env, ctx) {
    // 處理 HTTP 請求並轉發到 MCP 服務器
    if (request.method === "POST") {
      try {
        const body = await request.json();
        // 處理 MCP 請求並返回響應
        // 這裡需要將 HTTP 請求轉換為 MCP 服務器可以理解的格式
        const response = await handleMcpRequest(body, env);
        return new Response(JSON.stringify(response), {
          headers: { "Content-Type": "application/json" }
        });
      } catch (error) {
        return new Response(JSON.stringify({ 
          error: { message: error.message }
        }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
    
    return new Response("Giphy MCP Server - Send POST requests to use", { status: 200 });
  }
};

// 處理 MCP 請求的函數
async function handleMcpRequest(request, env) {
  // 實現將 HTTP 請求轉換為 MCP 格式並處理
  // 這裡需要根據 MCP 協議實現更多細節
}