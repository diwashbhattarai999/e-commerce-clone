import User from "@/models/User";
import db from "@/utils/db";
import { NextResponse } from "next/server";
import { createResetToken } from "@/utils/tokens";
import { sendEmails } from "@/utils/sendEmails";
import resetEmailTemplate from "@/emails/resetEmailTemplate";

export const POST = async (req: Request) => {
  try {
    await db.connectDB();

    //get the posted response email
    const { forgot_email: email } = await req.json();

    //get user from database
    const user = await User.findOne({ email });

    //check if user exists in database
    if (!user) {
      return NextResponse.json(
        { message: "This email does not exists." },
        { status: 400 }
      );
    }

    //create a new token from user id
    const userId = createResetToken({
      id: user._id.toString(),
    });

    //generate url to redirect user to reset password
    const url = `${process.env.BASE_URL}/auth/reset/${userId}`;

    //send email to the user with url
    sendEmails(email, url, "", "Reset Your Password", resetEmailTemplate);

    await db.disconnectDB();

    return NextResponse.json({
      message: "An email has been sent to you with a link to reset your password",
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
