import * as React from 'react'

import { emailConfig } from '../config/email'
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from './_components'

export default function Layout({
  previewText,
  children,
}: {
  previewText: string
  children: React.ReactNode
}) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-zinc-50 pt-[32px] font-sans">
          <Container className="mx-auto my-[40px] w-[465px] max-w-[465px] rounded-2xl border border-solid border-zinc-100 bg-white px-[24px] py-[20px]">
            {children}
          </Container>

          <Container className="mx-auto mt-[32px] w-[465px]">
            <Hr className="mx-0 my-[20px] h-px w-full bg-zinc-100" />
            <Section>
              <Img
                src={`https://gzc-dfsdown.mail.ftn.qq.com/1373//xtab9e60-9e20-cf72-6d94-85b12ca0f101?dkey=oECCNhzKu-b03Xaa17kA1YCF1sbpjaO_Pml1PXd1E5r_3pKdivHX9oO9yBKMZbXd_Qgxrbs6AhOzkqWKz4q7mZg&fname=img.jpg`}
                width="24"
                height="24"
                alt="Cali"
                className="mx-auto my-0"
              />
              <Text className="text-center">
                <Link
                  href="https://blog.krisyan.dev/"
                  className="text-zinc-700 underline"
                >
                  <strong>Kris Yan</strong>
                </Link>
                <br />
                無限進步 @Schale夏萊
              </Text>
              <Text className="text-center">
                <Link
                  href="https://blog.krisyan.dev/twitter"
                  className="text-xs text-zinc-600 underline"
                >
                  Twitter
                </Link>{' '}
                |&nbsp;
                <Link
                  href="https://blog.krisyan.dev/youtube"
                  className="text-xs text-zinc-600 underline"
                >
                  YouTube
                </Link>{' '}
                |&nbsp;
                <Link
                  href="https://blog.krisyan.dev/github"
                  className="text-xs text-zinc-600 underline"
                >
                  GitHub
                </Link>{' '}
                |&nbsp;
                <Link
                  href="https://blog.krisyan.dev/bilibili"
                  className="text-xs text-zinc-600 underline"
                >
                  bilibili
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
