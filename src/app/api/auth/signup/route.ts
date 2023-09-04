import User from "@/models/User";
import db from "@/utils/db";
import { validateEmail } from "@/utils/validation";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createActivationToken } from "@/utils/tokens";
import { sendEmails } from "@/utils/sendEmails";
import activateEmailTemplate from "@/emails/activateEmailTemplate";

export const POST = async (req: Request) => {
  try {
    await db.connectDB();
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "This email already exists." },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be atleast 6 characters." },
        { status: 400 }
      );
    }
    const crypedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: crypedPassword });
    const addedUser = await newUser.save();
    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmails(email, url, "", "Activate your account", activateEmailTemplate);
    await db.disconnectDB();
    return NextResponse.json({
      message: "Register sucess! Please activate your email to start.",
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
