import { Container } from '~/components/ui/Container'

export default function AboutPage() {
  return (
    <Container>
      <h1 className="mt-10 mb-8 text-3xl font-bold text-center">关于我 - 克喵爱吃卤面</h1>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center">我？</h2>
        <p>这是克喵爱吃卤面，你可以简称我为克喵，网络不同名，大部分有类似称呼，可以问问我是不是本人。</p>
        <p><strong>16人格：</strong>INFJ-T 提倡者</p>
        <p>一个普通大二牛马，在南京的双非二本学校里读自动化技术与应用专业。</p>
        
        <div className="space-y-2">
          <p>在2023年初，入驻小绿书，开始接触资源分享。</p>
          <p>年末，在TG开设账号，接触到了更丰富的资源渠道。</p>
          <p>24年初，接触到了频道：
            <a href="https://t.me/txwl666" target="_blank" rel="noopener noreferrer" className="text-blue-600">[@txwl666 (资源分享)]</a>、
            <a href="https://t.me/haoruanfenxiang" target="_blank" rel="noopener noreferrer" className="text-blue-600">[@haoruanfenxiang (好软分享)]</a>
            然后开始分享资源。
          </p>
          <p>11月3日，部署了第一个博客：
            <a href="https://github.com/ccbikai/BroadcastChannel" target="_blank" rel="noopener noreferrer" className="text-blue-600">BroadcastChannel</a>。
          </p>
          <p>11.3至今，尝试了hexo、hugo、notionnext、astro、vitepress/vuepress、nuxt等等框架</p>
          <p>2025.4.25，接触到 CaliCastle 的
            <a href="https://github.com/CaliCastle/cali.so" target="_blank" rel="noopener noreferrer" className="text-blue-600">博客</a>，搭建了现在的博客
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mt-8">Tags</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['大学牲', '博主', '资源分享党', '瞎折腾', '搞事情', '日常生产blog'].map((tag) => (
            <span 
              key={tag}
              className="px-4 py-1 bg-gray-200 rounded-full text-sm text-blue-900"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-center mt-8">找我？</h2>
        <div className="space-y-2">
          <p>个人在社交工具上偏QQ，微信多为熟人（现实中认识的人），我的QQ是：3149261770。</p>
          <p>邮箱上找我用163邮箱: <a href="mailto:kemiaofx@163.com" className="text-blue-600">kemiaofx@163.com</a></p>
          <p>Telegram 上找我：<a href="https://t.me/KemiaoJun" target="_blank" rel="noopener noreferrer" className="text-blue-600">@KemiaoJun</a>，最好用机器人：
            <a href="https://t.me/KemeowBot" target="_blank" rel="noopener noreferrer" className="text-blue-600">@KemeowBot</a> 私聊我。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center mt-8">投食！</h2>
        <p>这个博主目前还是个可怜巴巴的学生党，如果你愿意的话可以投喂他！</p>
        <p>大部分应该都会用到站点维护工作上，也有可能优先解决个人存活问题（比如吃饭），适当投喂鸽子可以减少鸽子咕咕咕的概率，投喂博主也会减少博主咕咕咕的概率（Bushi）</p>
        <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '40px', 
            margin: '1rem 0'
        }}>
        <div style={{ textAlign: 'center' }}>
        <strong>支付宝</strong><br />
            <img 
                src="https://s2.loli.net/2025/04/13/HYrnNFOKDZPSv4p.jpg" 
                style={{ 
                width: '200px',  // 直接设置固定宽度实现尺寸减半
                height: 'auto', 
                minWidth: '200px' 
        }} 
        />
        </div>
        <div style={{ textAlign: 'center' }}>
        <strong>微信</strong><br />
            <img 
            src="https://s2.loli.net/2025/04/13/HQ4lbFfJkpU2R9V.jpg" 
            style={{ 
            width: '200px',  // 直接设置固定宽度实现尺寸减半
            height: 'auto',
            minWidth: '200px'
        }} 
        />
        </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-8">版权？</h2>
        <div className="space-y-3">
          <p>所有文章如无特别声明均可视为采用 
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600">知识共享署名-相同方式共享 4.0 国际许可协议</a> 
            进行许可，这意味着你无需询问我是否可以转载。
          </p>
          <p>但是作为附加条件，你必须要在转载前在我这里留言告诉我你转载到了何处，并且附上转载的地址链接，同时禁止转载到非法以及黄色网站。</p>
          <p>于此同时，你也必须在我要求你删除转载的文章时删除你转载的文章，并且在取得我的同意前不得再次转载至此网站。</p>
          <p>所有尚未标注采用 
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600">知识共享署名-相同方式共享 4.0 国际许可协议</a> 
            进行许可字样的内容被默认视为禁止一切行为的转载，但是允许在取得我的同意之后进行引用（需要说明引用至何处作何作用）。
          </p>
          <p>如果有特殊声明的页面或文章，请按照此文章的特殊声明来判断是否允许转载，如果无法确定你也可以来询问我是否可以转载。</p>
          <p>关于代码方面，请按照相应的仓库许可证来判断是否可以转载和引用。</p>
          <p>如果没有添加许可证或者有疑问的，请留言询问我是否可以转载和引用。</p>
          <p>但不论是何种行为的引用或者转载，在尚未取得我的同意之前都禁止用于一切的商业行为上的用途。</p>
        </div>
      </section>
    </Container>
  )
}
