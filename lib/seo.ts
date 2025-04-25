export const seo = {
  title: '喵落阁 | 奇迹只能一时，命运只是漫长。',
  description:
    '我是克喵爱吃卤面，via KeMiao，一名学生，资源分享者，博主，目前还在探索期，仍在不断地学习与探索，憧憬着在不远的将来能创造出影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.152531.xyz'
      : 'http://localhost:3000'
  ),
} as const
