import Sections from "./Sections";


const SideBar = () => {
  return (
    <div
      className="
            fixed left-0 top-0 
            z-40 
            h-full 
            bg-base-background-color
            shadow-2xl
            px-20
        "
    >
      <Sections title="Menu" subtitle="Food"/>
    </div>
  );
};

export default SideBar;
