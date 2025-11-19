import MainLayout from "./MainLayout";
import MobileLayout from "./MobileLayout";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile(768); // <768 = mobile/tablet

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
}
