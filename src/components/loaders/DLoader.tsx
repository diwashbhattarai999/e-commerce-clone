import { DotLoader } from "react-spinners";

interface DotLoaderProps {
  loading: any;
}

const DLoader: React.FC<DotLoaderProps> = ({ loading }) => {
  return (
    <div
      className="
        fixed inset-0 
        bg-white/[0.5] 
        z-50 
        grid place-items-center
      "
    >
      <DotLoader loading={loading} color="#43a69b" />
    </div>
  );
};

export default DLoader;
