import Container from "@/components/Container";
import Loader from "@/components/loaders/Loader";
import ResetForm from "./ResetForm";
import jwt from "jsonwebtoken";

const page = ({ params }: { params: { id: string } }) => {
  const loading = false;
  const id = params.id;
  const TOKEN_SECRET = process.env.RESET_TOKEN_SECRET as string;
  const user_id = jwt.verify(id, TOKEN_SECRET);

  return (
    <>
      {loading && <Loader loading={loading} />}

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
            <ResetForm user_id={user_id} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
