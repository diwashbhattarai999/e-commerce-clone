import User from "@/models/User";
import db from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const PUT = async (req: Request) => {
  try {
    await db.connectDB();

    //get the put response id and password
    const { id, reset_password: password } = await req.json();

    //get user from database
    const user = await User.findById(id);

    //check if user exists in database
    if (!user) {
      return NextResponse.json(
        { message: "This account does not exists." },
        { status: 400 }
      );
    }

    //update the user
    const cryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
      password: cryptedPassword,
    });

    await db.disconnectDB();

    return NextResponse.json({ email: user.email });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
