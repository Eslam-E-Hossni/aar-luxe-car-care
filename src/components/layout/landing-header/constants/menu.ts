interface LinkProps {
  href: string;
  text: string;
}

type NavigationMenuProps = LinkProps[];

export const NAVIGATION_MENU: NavigationMenuProps = [
  {
    href: "/",
    text: "links.home",
  },
  {
    href: "#who-us",
    text: "links.whoUs",
  },
  {
    href: "#services",
    text: "links.services",
  },
  {
    href: "#projects",
    text: "links.projects",
  },
  {
    href: "#booking-online",
    text: "links.bookOnline",
  },
  {
    href: "/",
    text: "links.branches",
  },
  {
    href: "#contact-us",
    text: "links.contact",
  },
];
