interface LinkProps {
  href: string;
  text: string;
}

type NavigationMenuProps = LinkProps[];

export const NAVIGATION_MENU: NavigationMenuProps = [
  {
    href: "#about-us",
    text: "links.aboutUs",
  },
  {
    href: "#services",
    text: "links.services",
  },
  {
    href: "#contact-us",
    text: "links.bookOnline",
  },
  {
    href: "#contact-us",
    text: "links.branches",
  },
  {
    href: "#contact-us",
    text: "links.contact",
  },
];
