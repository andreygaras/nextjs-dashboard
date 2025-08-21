import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Layout from './dashboard/layout';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <div><SideNav/></div> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
      
    </html>
  );
}
