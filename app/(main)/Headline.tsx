'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      可能是 <span className="font-mono">&lt;</span>大学牛马
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative rounded-2xl bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-orange-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-orange-400/90">
        <span className="absolute -left-0.5 -top-0.5 h-1.5 w-1.5 border border-orange-700 bg-zinc-50 dark:border-orange-400" />
        <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 border border-orange-700 bg-zinc-50 dark:border-orange-400" />
        <span className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 border border-orange-700 bg-zinc-50 dark:border-orange-400" />
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 border border-orange-700 bg-zinc-50 dark:border-orange-400" />
      </span>
      学生
    </span>
  )
}

function OCD() {
  return (
    <span className="group inline-flex items-center">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>资源分享者</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group inline-flex items-center">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span>写博客</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />，
        <span className="block h-2" />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是大二牛马，
          via  <PeekabooLink href="https://152531.xyz/">克喵爱吃卤面</PeekabooLink>
          ，INFJ-T，目前还处在探索期，仍在不断地探索与学习。我热爱分享资源、记录生活日记、享受生活，以及在未知领域中探索。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://x.com/kemiaosw"
          aria-label="我的推特"
          platform="twitter"
        />
        {/* <SocialLink
          href="https://www.youtube.com/channel/UCd6QCusZZ8urv2Owol_KEzA"
          aria-label="我的 YouTube"
          platform="youtube"
        /> */}
        <SocialLink
          href="https://space.bilibili.com/3546643173477234/"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://github.com/Kemeow815"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://t.me/KemiaoJun"
          aria-label="我的 TG"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:kemiaofx@163.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
