export interface SubMenuItem {
  id: number;
  name: string;
  link: string;
}

export interface MenuItem {
  id: number;
  name: string;
  link: string;
  subMenu: SubMenuItem[];
}

export interface CategoryItem {
  id: number;
  name: string;
  link: string;
  menu: MenuItem[];
}

const categoryData: CategoryItem[] = [
  {
    id: 1,
    name: "Daily Needs",
    link: "",
    menu: [
      {
        id: 1,
        name: "Food Essentials",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "SD Liquors",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Hair Care",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            id: 2,
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            id: 3,
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Home Care",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Household Cleaners",
            link: "",
          },
          {
            id: 2,
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            id: 3,
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            id: 4,
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Personal Care",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Bath Products",
            link: "",
          },
          {
            id: 2,
            name: "Shaving & Grooming",
            link: "",
          },
        ],
      },
      {
        id: 6,
        name: "Pet Care",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Pet Grooming",
            link: "",
          },
          {
            id: 2,
            name: "Pet Food",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
    link: "",
    menu: [
      {
        id: 1,
        name: "Mobile Phones & Tablets",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Large Home Appliances",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
      {
        id: 3,
        name: "Televisions",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Hair Oil & Serum",
            link: "",
          },
          {
            id: 2,
            name: "Hair Colour & Mehendi",
            link: "",
          },
          {
            id: 3,
            name: "Shampoo & Conditioner",
            link: "",
          },
        ],
      },
      {
        id: 4,
        name: "Small Home Appliances",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Household Cleaners",
            link: "",
          },
          {
            id: 2,
            name: "Laundry Soap & Detergent",
            link: "",
          },
          {
            id: 3,
            name: "Dishwashing Essentials",
            link: "",
          },
          {
            id: 4,
            name: "Room Freshner",
            link: "",
          },
        ],
      },
      {
        id: 5,
        name: "Audio Accessories",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Bath Products",
            link: "",
          },
          {
            id: 2,
            name: "Shaving & Grooming",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Books",
    link: "",
    menu: [
      {
        id: 1,
        name: "Academics",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Genre",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Myntra Brands",
    link: "",
    menu: [
      {
        id: 1,
        name: "Myntra Men",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rice & Rice Products",
            link: "",
          },
          {
            id: 2,
            name: "Cooking Oils & Vinegar",
            link: "",
          },
          {
            id: 3,
            name: "Flour Products",
            link: "",
          },
          {
            id: 4,
            name: "Beans & Lentils Products",
            link: "",
          },
          {
            id: 5,
            name: "Hot Beverages",
            link: "",
          },
          {
            id: 6,
            name: "Biscuit & Cookies",
            link: "",
          },
        ],
      },
      {
        id: 2,
        name: "Myntra Women",
        link: "",
        subMenu: [
          {
            id: 1,
            name: "Rum",
            link: "",
          },
          {
            id: 2,
            name: "Blended Whisky",
            link: "",
          },
          {
            id: 3,
            name: "Vodka",
            link: "",
          },
          {
            id: 4,
            name: "Beer",
            link: "",
          },
          {
            id: 5,
            name: "Wine",
            link: "",
          },
        ],
      },
    ],
  },
];

export default categoryData;
