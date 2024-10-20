import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
export default withAuth({
    pages: {
        signIn: "/error",
    },
});

export const config = {
    matcher: ["/form", "/"],
};
