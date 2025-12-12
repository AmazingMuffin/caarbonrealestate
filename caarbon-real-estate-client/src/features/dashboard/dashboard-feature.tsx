import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  BookOpen,
  CookingPot,
  Droplets,
  LucideAnchor,
  LucideCode,
  LucideWallet,
  MessageCircleQuestion,
} from 'lucide-react'
import React from 'react'
import { AppHero } from '@/components/app-hero'

const primary: {
  label: string
  href: string
  description: string
  icon: React.ReactNode
}[] = [
  {
    label: 'Caarbons whitepaper',
    href: 'https://www.caarbons.ai/pdf/CAA_WHITEPAPER%20V1.2_C.pdf',
    description: 'The official whitepaper. Your first stop for understanding the Caarbons project.',
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
  },
  {
    label: 'Caarbons Cookbook',
    href: 'https://solana.com/developers/cookbook/',
    description: 'Practical examples and code snippets for common tasks when building on Carrbons.',
    icon: <CookingPot className="w-8 h-8 text-green-400" />,
  },
]

const secondary: {
  label: string
  href: string
  icon: React.ReactNode
}[] = [
  {
    label: 'Official Caarbons site',
    href: ' https://www.caarbons.ai/',
    icon: <LucideAnchor className="w-5 h-5 text-indigo-400" />,
  },
  {
    label: 'Caarbons discord',
    href: 'https://discord.gg/WENmFUwz',
    icon: <Droplets className="w-5 h-5 text-green-400" />,
  },
  {
    label: 'Caarbons Telegram',
    href: ' https://t.me/caarbonsarmy',
    icon: <MessageCircleQuestion className="w-5 h-5 text-orange-400" />,
  },
  {
    label: 'Caarbons on X',
    href: 'https://x.com/caarbons',
    icon: <LucideWallet className="w-5 h-5 text-blue-400" />,
  },
  {
    label: 'Codama Repository',
    href: 'https://github.com/codama-idl/codama',
    icon: <LucideCode className="w-5 h-5 text-lime-400" />,
  },
]

export default function DashboardFeature() {
  return (
    <div>
      <AppHero title="CAARBON'S" subtitle="Say hi to your new Caarbon's app." />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {primary.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="h-full flex flex-col transition-all duration-200 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader className="flex-row items-center gap-4">
                  {link.icon}
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">{link.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>More Resources</CardTitle>
              <CardDescription>Expand your knowledge with these community and support links.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {secondary.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-4 group rounded-md p-2 -m-2 hover:bg-muted transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      <span className="flex-grow text-muted-foreground group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
