export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blox",
  description: "Code blox repo",
  navItems: [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Blox",
      href: "/blox",
    },
    {
      label: "Categories",
      href: "/categories",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "About",
      href: "/about",
    },

  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Blox",
      href: "/blox",
    },
    {
      label: "Categories",
      href: "/categories",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
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
