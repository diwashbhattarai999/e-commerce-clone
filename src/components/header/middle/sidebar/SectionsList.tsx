import { List } from "./SideBarList";

interface SectionsListProps {
  lists: List[];
}

const SectionsList: React.FC<SectionsListProps> = ({ lists }) => {
  return <>{lists.map(() => {})}</>;
};

export default SectionsList;
