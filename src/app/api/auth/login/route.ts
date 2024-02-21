import { NextResponse } from "next/server";

export async function POST(
  req: Request,
) {
    // Process a POST request
    const body = await req.json();
    console.log('parsedBody', body)
    if(!body) return new Response(JSON.stringify({error: 'Bad Request'}), {
      status: 400
    })

    if(body.login === 'Login' && body.password === 'Password') {
      return NextResponse.json(body);
    } else {
      return new Response(JSON.stringify({error: 'Unauthorized'}), {
        status: 401
      });
    }
  }