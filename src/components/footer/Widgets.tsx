interface WidgetProps {
  title: string;
  subtitles: any[];
}

const Widgets: React.FC<WidgetProps> = ({ title, subtitles }) => {
  return (
    <div className="w-1/2 px-2">
      <h3 className="uppercase text-dark-color text-base mb-5 leading-[1.24rem] font-bold">{title}</h3>
      <ul>
        {subtitles.map(({id, value}) => {
          return <li key={id}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Widgets;
