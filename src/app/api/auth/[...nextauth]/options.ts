import { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";

import clientPromise from "../lib/mongodb";
import User from "@/models/User";
import db from "@/utils/db";

db.connectDB();

export const options: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    // Auth0Provider({
    //   clientId: process.env.AUTH0_CLIENT_ID as string,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
    //   issuer: process.env.AUTH0_ISSUER,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password: ",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password as string;

        // Check if the provided credentials match the demo user
        if (email === "demo@example.com" && password === "123456") {
          const demoUser = {
            name: "Demo User",
            email: "demo@example.com",
            image: "/public/images/user.png",
          };
          return demoUser; // Return the demo user
        }

        const user = await User.findOne({ email });

        if (user) {
          try {
            await SignInUser({ password, user });
            return user;
          } catch (error) {
            throw new Error("Email or password is wrong!");
          }
        } else {
          throw new Error("This email does not exist.");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        let user = await User.findById(token.sub);

        if (user && session.user) {
          session.user.id = token.sub || user._id.toString();
          session.user.role = user.role || "user";
        }
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

type UserObject = {
  password?: string;
};
type SignInUserFunction = (params: {
  password: string;
  user: UserObject;
}) => Promise<UserObject | null>;

const SignInUser: SignInUserFunction = async ({
  password,
  user,
}: {
  password: string;
  user: UserObject;
}) => {
  if (!user.password) {
    throw new Error("Please enter your password.");
  }

  const testPassword = await bcrypt.compare(password, user.password);
  if (!testPassword) {
    throw new Error("Email or password is wrong!");
  }
  return user;
};
