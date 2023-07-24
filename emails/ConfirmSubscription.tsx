import * as React from 'react'

import { emailConfig } from '../config/email'
import { Button, Heading, Hr, Img, Link, Section, Text } from './_components'
import Layout from './Layout'

const ConfirmSubscriptionEmail = ({ link = 'link.com/confirm?fake-token' }) => {
  const previewText = `确认订阅动态吗？`

  return (
    <Layout previewText={previewText}>
      <Section className="mt-[24px]">
        <Img
          src={`https://gzc-dfsdown.mail.ftn.qq.com/1373//xt4793da-3528-f283-2b7c-32c4f9381f56?dkey=oM03ILlUIU0oeV1bxZaEo7FN6fEH2eks-AnY6oTc2R_ZgaHjuKctG0A3Ec73sF12th1eQLfKNDylPSYA8L95-9Q&fname=subscription-email-header.jpg`}
          width="250"
          height="129.28"
          alt="Cali"
          className="mx-auto my-0"
        />
      </Section>
      <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-bold text-black">
        订阅动态
      </Heading>
      <Text className="text-[14px] leading-[24px] text-black">Hello!</Text>
      <Text className="text-[14px] leading-[24px] text-black">
        为了认证此操作，请您点击下面的按钮以确认订阅动态，谢谢 🙏
      </Text>
      <Section className="mb-[32px] mt-[32px] text-center">
        <Button
          pX={20}
          pY={12}
          className="rounded-xl bg-zinc-900 text-center text-[12px] font-semibold text-white no-underline"
          href={link}
        >
          确认订阅
        </Button>
      </Section>
      <Text className="text-[14px] leading-[24px] text-black">
        或者复制下面的链接到你的浏览器中进行访问：
        <br />
        <Link href={link} className="text-blue-600 no-underline">
          {link}
        </Link>
      </Text>
      <Hr className="mx-0 my-[26px] h-px w-full bg-zinc-100" />
      <Text className="text-[12px] leading-[24px] text-[#666666]">
        如果不是你本人操作的可以无视本封邮件，如果你有任何疑问可以随时联系我。
      </Text>
    </Layout>
  )
}

export default ConfirmSubscriptionEmail
