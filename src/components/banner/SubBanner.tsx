import BannerSwiper from "./BannerSwiper";

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
        <BannerSwiper />
      </div>
    </div>
  );
};

export default SubBanner;
