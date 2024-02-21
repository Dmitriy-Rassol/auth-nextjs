import { NextResponse } from "next/server";

export async function POST(
  req: Request,
) {
    // Process a POST request
    if (req.method === 'POST') {
      const body = await req.json();
      console.log('parsedBody', body);
      
      if (!body) {
        return new Response(JSON.stringify({error: 'Bad Request'}), {
          status: 400
        })
      }
      
      return NextResponse.json(body);
  } else {
      return new Response(JSON.stringify({error: 'Method Not Allowed' }), {
        status: 405
      });
  }
  }