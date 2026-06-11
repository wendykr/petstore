import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import styles from './layout.module.scss';

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Pet Store',
  description: 'Manage your pets with the Swagger Petstore API.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layout}>
          <h2>Sidebar</h2>
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
