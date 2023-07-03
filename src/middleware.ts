import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./lib/token";
import { getErrorResponse } from "./lib/helpers";

interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string;
  };
}

let redirectToLogin = false;
export async function middleware(req: NextRequest) {
  let token: string | undefined;



//1) FASE IN CUI NON SI PUO ACCEDERE ALLA LOGIN PAGE - USER - LOGOUT
  // L'uso di ?. è un operatore di opzionalità di accesso sicuro (TSX3.7), consente di accedere a proprietà o metodi di un oggetto solo se l'oggetto stesso è definito e non è null o undefined. Se null o undefined then return undefined senza generare un'eccezione.
  if (req.cookies.has("token")) {
    token = req.cookies.get("token")?.value;
  } else if (req.headers.get("Authorization")?.startsWith("Bearer ")) {
    token = req.headers.get("Authorization")?.substring(7);
  }

  if (req.nextUrl.pathname.startsWith("/login") && (!token || redirectToLogin))
    return;

  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/api/users") ||
      req.nextUrl.pathname.startsWith("/api/auth/logout"))
  ) {
    return getErrorResponse(
      401,
      "You are not logged in. Please provide a token to gain access."
    );
  }




//2) FASE IN CUI SI PUO ACCEDERE e RITORNO DELLUTENTE VERIFICATO 
  const response = NextResponse.next();
  const allowedOrigins = process.env.NODE_ENV === 'production' ? ['https://www.site.com'] : ['http://localhost"3000', 'http://127.0.0.1:8000']
  const origin = req.headers.get('origin')

  if (origin && !allowedOrigins.includes(origin)){
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad request",
      headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Headers' : '*'
      }
    })
  }

  try {
    if (token) {
      const { sub } = await verifyJWT<{ sub: string }>(token);
      response.headers.set("X-USER-ID", sub);
      (req as AuthenticatedRequest).user = { id: sub };
    }
  } catch (error) {
    redirectToLogin = true;
    if (req.nextUrl.pathname.startsWith("/api")) {
      return getErrorResponse(401, "Token is invalid or user doesn't exists");
    }

    return NextResponse.redirect(
      new URL(`/login?${new URLSearchParams({ error: "badauth" })}`, req.url)
    );
  }

  const authUser = (req as AuthenticatedRequest).user; 

  if (!authUser) {  
    return NextResponse.redirect(
      new URL(
        `/login?${new URLSearchParams({
          error: "badauth",
          forceLogin: "true",
        })}`,
        req.url
      )
    );
  }

  if (req.url.includes("/login") && authUser) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return response;
}

// middleware sarà eseguito per i percorsi 
export const config = { 
  matcher: ["/profile", "/login", "/api/users/:path*", "/api/auth/logout",],
};

