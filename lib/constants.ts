export const SITE_NAME = "MenimSaytim";
export const SITE_DESCRIPTION = "Next.js bilan qurilgan zamonaviy veb-sayt";

export const NAV_LINKS = [
  { href: "/", label: "Bosh Sahifa" },
  { href: "/about", label: "Biz Haqimizda" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Aloqa" },
  { href: "/product", label: "Mahsulotlar" },
] as const;

export const DASHBOARD_LINKS = [
  { href: "/dashboard", label: "📊 Umumiy" },
  { href: "/dashboard/analytics", label: "📈 Tahlil" },
  { href: "/dashboard/settings", label: "⚙️ Sozlamalar" },
] as const;
