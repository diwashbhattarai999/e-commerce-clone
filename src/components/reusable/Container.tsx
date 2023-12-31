"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1300px] mx-auto xl:px-32 md:px-10 sm:px-6 px-4">
      {children}
    </div>
  );
};

export default Container;
