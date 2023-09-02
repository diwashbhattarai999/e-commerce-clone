import jwt from "jsonwebtoken";
const KEY = process.env.ACTIVATION_TOKEN_SECRET as string;

export const createActivationToken = (payload: any) => {
  return jwt.sign(payload, KEY, {
    expiresIn: "2d",
  });
};
