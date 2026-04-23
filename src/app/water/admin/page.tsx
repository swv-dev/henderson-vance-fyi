import type { Metadata } from "next";
import AdminPanel from "./admin-panel";

export const metadata: Metadata = {
  title: "Admin - SB 214 Signups",
  robots: "noindex, nofollow",
};

export default function AdminPage() {
  return (
    <main className="flex-1 min-h-screen">
      <AdminPanel />
    </main>
  );
}
