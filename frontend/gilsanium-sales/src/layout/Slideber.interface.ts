export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MenuItemType {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
  badge?: number;
  children?: MenuItemType[];
  isExpandable?: boolean;
  isExpanded?: boolean;
}

export const menuItems: MenuItemType[] = [
  {
    id: "overview",
    label: "Overview",
    icon: "/Icon.svg",
    href: "/dashboard",
  },
  {
    id: "profile",
    label: "Profile",
    icon: "/Icon Container (2).svg",
    href: "/profile",
  },
  {
    id: "product",
    label: "Product",
    icon: "/Icon (1).svg",
    href: "/products",
    isExpandable: true,
    children: [
      {
        id: "smartwatch",
        label: "Smartwatch",
        icon: "",
        href: "/products/smartwatch",
      },
      { id: "drone", label: "Drone", icon: "", href: "/products/drone" },
      { id: "speaker", label: "Speaker", icon: "", href: "/products/speaker" },
      {
        id: "chargers",
        label: "Chargers",
        icon: "",
        href: "/products/chargers",
      },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    icon: "/Icon (2).svg",
    href: "/customers",
  },
  {
    id: "message",
    label: "Message",
    icon: "/Icon Container (1).svg",
    href: "/messages",
    badge: 20,
  },
];

export const accountItems: MenuItemType[] = [
  {
    id: "settings",
    label: "Settings",
    icon: "/Settings Icon Container.svg",
    href: "/settings",
  },
  {
    id: "help",
    label: "Help",
    icon: "/Help Icon Container.svg",
    href: "/help",
  },
  {
    id: "logout",
    label: "Log Out",
    icon: "/Logout Icon Container.svg",
    href: "/logout",
  },
];
