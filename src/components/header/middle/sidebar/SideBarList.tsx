import { GiHamburgerMenu } from "react-icons/gi";

export interface List {
  id: number;
  name: string;
  link: string;
}

const initialSections = [
  {
    id: 1,
    title: "Menu",
    active: true,
    Icon: GiHamburgerMenu,
  },
  {
    id: 2,
    title: "Account",
    active: false,
  },
  {
    id: 3,
    title: "Settings",
    active: false,
  },
];

const AccountList: List[] = [
  {
    id: 1,
    name: "Advertise On Sastodeal",
    link: "/advertise_on_sastodeal",
  },
  {
    id: 2,
    name: "Sell On Sastodeal",
    link: "sell_on_sastodeal",
  },
  {
    id: 3,
    name: "Raise A Ticket",
    // link: 'https://support.sastodeal.com/open.php?_gl=1*9zvyy2*_ga*ODA2ODE0MTUxLjE2ODA0MDE4ODg.*_ga_77Q2597311*MTY5MTkzOTIyMi42My4xLjE2OTE5MzkyMjMuNTkuMC4w"',
    link: "",
  },
  {
    id: 4,
    name: "Order Tracking",
    link: "order_tracking",
  },
  {
    id: 5,
    name: "Sign In",
    link: "",
  },
  {
    id: 6,
    name: "Sign Up",
    link: "",
  },
];

const SettingsList: List[] = [
  {
    id: 1,
    name: "English(NP)",
    link: "",
  },
];

export { AccountList, SettingsList };
export default initialSections;
