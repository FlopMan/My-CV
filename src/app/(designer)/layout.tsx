"use client";

import ScrollToTop from "@/app/(designer)/common/ScrollToTop";
import { useSearchParams } from "next/navigation";
import "swiper/css";
import Footer from "./common/Footer";
import Header from "./common/Header";
const themes = ["designerStyle1", "designerStyle2", "designerStyle3"];

export default function DesignerLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme")?.toString();
  const currentTheme = theme && themes.includes(theme) ? theme : themes[0];

  return (
    <div className={`designer-layout ${currentTheme} bg-theme-main-background`}>
      <Header />
      <ScrollToTop />
      <main className='designer-content'>{children}</main>
      <Footer />
    </div>
  );
}
