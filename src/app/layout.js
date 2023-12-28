import './globals.css';
import { Anton } from 'next/font/google';

export const metadata = {
  title: 'PLE Essentials',
  description: 'distributor resale website cars parts',
};

const anton = Anton({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={anton.style}>{children}</body>
    </html>
  );
}
