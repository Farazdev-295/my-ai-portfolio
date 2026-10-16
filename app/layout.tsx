
import "./globals.css";




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={` h-full antialiased`} >
      <body className="min-h-full bg-green-700 flex flex-col">
        <div className="text-amber-950">Main Page </div>
        {children}
        </body>
    </html>
  );
}
