import "./globals.css";

export const metadata = {
  title: "DabbleWithReactTs",
  description: "Learn React Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
