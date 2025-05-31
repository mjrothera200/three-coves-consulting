import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Three Coves Consulting LLC',
  description: 'Three Coves Consulting LLC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
