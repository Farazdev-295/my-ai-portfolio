
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={` h-full antialiased`} >
      <body className="min-h-full bg-green-700 flex flex-col">
        <div className="text-amber-400 text-3xl font-bold">About page </div>
        {children}

      </body>
    </html>
  );
}
