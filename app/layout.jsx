import './globals.css';

export const metadata = {
  title: 'Svenska Krögare',
  description: 'Premium inköpsstöd för restaurangbranschen.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
