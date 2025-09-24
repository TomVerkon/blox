export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blox",
  description: "Code blox repo",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
      active: false,
    },
    {
      label: "Blox",
      href: "/blox",
      active: false,
    },
    {
      label: "Categories",
      href: "/categories",
      active: false,
    },
    {
      label: "Settings",
      href: "/settings",
      active: false,
    },
    {
      label: "About",
      href: "/about",
      active: false,
    },

  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/",
      active: false,
    },
    {
      label: "Blox",
      href: "/blox",
      active: false,
    },
    {
      label: "Categories",
      href: "/categories",
      active: false,
    },
    {
      label: "Settings",
      href: "/settings",
      active: false,
    },
    {
      label: "About",
      href: "/about",
      active: false,
    },
    {
      label: "Logout",
      href: "/logout",
      active: false,
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
