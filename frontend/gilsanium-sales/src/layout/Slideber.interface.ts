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
    icon: "/overview.png",
    href: "/dashboard",
  },
  {
    id: "profile",
    label: "Profile",
    icon: "/profile.png",
    href: "/profile",
  },
  {
    id: "product",
    label: "Product",
    icon: "/product.png",
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
    icon: "/Customer.png",
    href: "/customers",
  },
  {
    id: "message",
    label: "Message",
    icon: "/message.png",
    href: "/messages",
    badge: 20,
  },
];

export const accountItems: MenuItemType[] = [
  {
    id: "settings",
    label: "Settings",
    icon: "/setting.png",
    href: "/settings",
  },
  {
    id: "help",
    label: "Help",
    icon: "/Help.png",
    href: "/help",
  },
  {
    id: "logout",
    label: "Log Out",
    icon: "/logout.png",
    href: "/logout",
  },
];
