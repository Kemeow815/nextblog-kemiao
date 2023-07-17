export const emailConfig = {
  from: 'hi@mail.krisyan.dev',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://mail.krisyan.dev`
      : 'http://localhost:3000',
}
