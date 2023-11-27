import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse, ErrorResponse } from "ai"; // Ensure ErrorResponse is imported if available

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req) {
  try {
    const { messages } = await req.json();
    const response = await openai.createChatCompletion({
      model: "gpt-4-1106-preview",
      stream: true,
      messages,
    });
    const stream = OpenAIStream(response);
    const textResponse = new StreamingTextResponse(stream);
    return textResponse;
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.status || 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
