interface HeadingProps {
  title: string;
  Icon?: React.ElementType;
}

const Heading: React.FC<HeadingProps> = ({ title, Icon }) => {
  return (
    <div className="py-6">
      <div className="flex items-center justify-between">
        <h1
          className="
            text-xl text-accent-color font-bold 
            flex flex-wrap items-center gap-2
        "
        >
          {title}
          {Icon && <Icon size={20} />}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
