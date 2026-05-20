import Link from "next/link";
import { DASHBOARD_LINKS } from "@/lib/constants";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - faqat dashboard sahifalarida ko'rinadi */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          {DASHBOARD_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-gray-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Asosiy kontent */}
      <div className="flex-1 p-8 bg-gray-50">
        {children}
      </div>
    </div>
  );
}