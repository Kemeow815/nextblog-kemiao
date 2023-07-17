import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/friends/Projects'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { Container } from '~/components/ui/Container'

const title = '友情链接'
const description =
  '欢迎前往 YanDao0313/Friends 互换友链~'
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          我的朋友们。
        </h1>
        <div className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          欢迎前往此处互换友链：
          <PeekabooLink href="https://github.com/YanDao0313/Friends">
            GitHub
          </PeekabooLink><br />
          仅展示大陆可正常访问的链接。愿大家都能互相支持、<b>无限进步</b>。
        </div>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
