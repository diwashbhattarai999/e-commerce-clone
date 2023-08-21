import MainSwiper from "./swiper/Swiper";

const SubBanner = () => {
  return (
    <div
      className="
        absolute bottom-[10px] laptop:left-1/2 right-0
        w-full tablet:w-1/2 max-w-[235px] tablet:max-w-[700px]
        -ml-[50px] pr-[20px] 
    "
    >
      <div className="-mx-[10px] cursor-pointer">
        <MainSwiper />
      </div>
    </div>
  );
};

export default SubBanner;
