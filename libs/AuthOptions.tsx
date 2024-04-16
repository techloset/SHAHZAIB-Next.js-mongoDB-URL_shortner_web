import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../libs/prismadb";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { lable: "Email", type: "email" },
        name: { lable: "Email", type: "text" },
        password: { label: "password", type: "password" },
        confirmPassword: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prismadb.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.id || !user.hashedPassword) {
          throw new Error("invalid credentials");
        }
        const currentHashedpassword = await bcrypt.hash(
          credentials.password,
          12
        );
        bcrypt.compare(currentHashedpassword, user.hashedPassword);
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
