import jwt from "jsonwebtoken";
const ACTIVATION_KEY = process.env.ACTIVATION_TOKEN_SECRET as string;
const RESET_KEY = process.env.RESET_TOKEN_SECRET as string;

interface TokenPayload {
  id: string;
}

export const createActivationToken = (payload: TokenPayload) => {
  return jwt.sign(payload, ACTIVATION_KEY, {
    expiresIn: "2d",
  });
};

export const createResetToken = (payload: TokenPayload) => {
  return jwt.sign(payload, RESET_KEY, {
    expiresIn: "6h",
  });
};
