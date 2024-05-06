import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-200 flex items-center justify-center">
          Header
        </header>
        <main className="flex flex-1">{children}</main>
        <footer className="bg-purple-500 flex items-center justify-center">
          Footer
        </footer>
      </body>
    </html>
  );
}
