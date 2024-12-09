import dynamic from "next/dynamic";
const DashboardLayout = dynamic(() =>
  import("@/components/layout/DashboardLayout").then(
    (module) => module.DashboardLayout
  )
);

export default function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
