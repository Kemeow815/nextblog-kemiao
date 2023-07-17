export const seo = {
  title: 'Kris Yan | 学生、开发者，摸鱼中',
  description:
    '我是颜导，via Kris，一名学生，开发者，博主，目前还在探索期，仍在不断地学习与探索，憧憬着在不远的将来能创造出影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.krisyan.dev'
      : 'http://localhost:3000'
  ),
} as const
