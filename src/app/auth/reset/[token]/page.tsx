import Container from "@/components/reusable/Container";
import ResetForm from "./ResetForm";
import jwt from "jsonwebtoken";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const page = async ({ params }: { params: { token: string } }) => {
  let jwt_error = false;
  const { token } = params;
  const session = await getServerSession(options);
  if (session) {
    redirect("/");
  }

  let user_id: any = null;

  try {
    user_id = jwt.verify(token, process.env.RESET_TOKEN_SECRET as string);
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      jwt_error = true;
    } else {
      redirect("/");
    }
  }

  return (
    <>
      <div className="text-black mt-44 laptop:mt-56 mb-20 h-full">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <h2
              className="
                text-lg mobile:text-2xl font-semibold text-primary-color
                border-b-2 border-[#d4d4d4] 
                w-full pb-2 tablet:pb-4 mb-4
              "
            >
              Reset Password
            </h2>
            <h3
              className="
              text-dark-color
              font-semibold text-base
              pb-3 mb-3 mt-1
            "
            >
              Set up a new password
            </h3>
            <ResetForm id={user_id?.id} jwt_error={jwt_error} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
