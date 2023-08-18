"use client";

import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-wrap -mx-2 mb-2">
      {links.map(({ id, heading, linkss }) => {
        return (
          <div key={id} className="w-1/2 text-sm">
            <h3 className="uppercase text-dark-color text-base mb-5 leading-[1.24rem] font-bold">
              {heading}
            </h3>
            <ul>
              {linkss.map(({ id, value, link }) => {
                return (
                  <li key={id} className="mb-2">
                    <Link
                      href={link}
                      className="text-dark-color hover:text-primary-color"
                    >
                      {value}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Links;

interface Ilink {
  id: number;
  value: string;
  link: string;
}

interface Ilinks {
  id: number;
  heading: string;
  linkss: Ilink[];
}

const links: Ilinks[] = [
  {
    id: 1,
    heading: "Contact us",
    linkss: [
      {
        id: 1,
        value: "Customer Care",
        link: "https://www.sastodeal.com/default/customer-care/",
      },
      {
        id: 2,
        value: "FAQs",
        link: "https://www.sastodeal.com/default/faq/",
      },
      {
        id: 3,
        value: "Return and Refund Policy",
        link: "https://www.sastodeal.com/default/returns-refund-policy/",
      },
      {
        id: 4,
        value: "Terms and Conditions",
        link: "https://www.sastodeal.com/default/term-condition/",
      },
      {
        id: 5,
        value: "Raise a ticket",
        link: "https://support.sastodeal.com/open.php?_gl=1*1y4oonv*_ga*ODA2ODE0MTUxLjE2ODA0MDE4ODg.*_ga_77Q2597311*MTY5MTI5Mzg5MS4yNS4xLjE2OTEyOTM4OTMuNTguMC4w",
      },
    ],
  },
  {
    id: 2,
    heading: "Sastodeal",
    linkss: [
      {
        id: 1,
        value: "About Us",
        link: "",
      },
      {
        id: 2,
        value: "Careers @ SD",
        link: "",
      },
      {
        id: 3,
        value: "Advertise on SD",
        link: "",
      },
      {
        id: 4,
        value: "Sell on SD",
        link: "",
      },
    ],
  },
];
