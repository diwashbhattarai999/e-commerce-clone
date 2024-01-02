import NextAuth from "next-auth/next";

export enum Role {
  user = "user",
  admin = "admin",
}

declare module "next-auth" {
  interface User {
    id: string;
    role?: Role;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
