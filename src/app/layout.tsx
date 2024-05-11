import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
// Change Font here
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sassy Saas",
  description: "A very sassy sass",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
