import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";


export default withAuth(function middleware(request: NextRequest) {}, {
  secret: process.env.NEXTAUTH_SECRET,
});


export const config = {
  matcher: ["/", "/add", "/main", "/reset"],
};

// export { default } from "next-auth/middleware";
// export const config = { matcher: ["/", "/add", "/main", "/reset"] };