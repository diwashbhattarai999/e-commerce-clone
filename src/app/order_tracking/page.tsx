import Container from "@/components/reusable/Container";
import Input from "./Input";

const page = () => {
  return (
    <div>
      <Container>
        <div className="my-6 mx-4 p-6 min-h-[280px]">
          <div
            className="
              -mx-2 py-7 px-4
              border-[1px] border-[#eef1f5] 
            "
          >
            <div className="color-[#000000d8] bg-white text-sm">
              <div
                className="
                bg-primary-color text-white 
                font-bold  px-6
              "
              >
                <div
                  className="
                    py-4 
                    text-base text-ellipsis text-center
                    overflow-hidden whitespace-nowrap
                  "
                >
                  Order Tracking
                </div>
              </div>
              <div className="p-6">
                <Input />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
