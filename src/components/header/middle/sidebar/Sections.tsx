interface SectionProps {
  title: string;
  subtitle: string;
  Icon?: React.ElementType;
}

const Sections: React.FC<SectionProps> = ({ Icon, title, subtitle }) => {
  return (
    <div className="flex flex-col ">
      <div className="font-semibold text-lg h-16 pt-6">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default Sections;
