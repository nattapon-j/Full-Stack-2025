export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
        <nav>Next.js Dashboard</nav>
        {children}
    </section>
  );
}