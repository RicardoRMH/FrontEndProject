import "./globals.css";
import HeaderModule from "@/app/components/header/header";
import FooterModule from "@/app/components/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      

      <body>
        <HeaderModule/>
        {children}
        <FooterModule/>
      </body>
      
      
    </html>
  );
}