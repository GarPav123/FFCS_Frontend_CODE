import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { constructMetadata } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { cn } from "@/app/cn"
import './globals.css'

import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'

import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Providers>
                <body
                    className={cn(
                        'min-h-screen font-sans antialiased grainy',
                        inter.className,
                    )}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <Toaster />
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </body>
            </Providers>
        </html>
    )
}
