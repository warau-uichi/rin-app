import Head from 'next/head';

const siteName= '琳-rin- からだにやさしいサロン | 大阪市 上新庄';
const description = '大阪市内、阪急京都線上新庄駅近くの鍼灸美容サロンです。アロマオイル、ボディケア、足つぼマッサージを提供しています。お客様一人ひとりの体の疲れやお悩みに合わせた施術で、心身ともに癒しとリフレッシュをお届けします。サイマティクスセラピー、e-フェイスリフト、鍼灸、黄土よもぎ蒸しもご用意しており、全身の美と健康をサポートします。';
const url = 'https://rin-salon.vercel.app/';
const imgUrl = 'https://rin-salon.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frin_logo.b87a028b.jpg&w=3840&q=75';

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={siteName} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="msapplication-square70x70logo" content="/site-tile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/site-tile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/site-tile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/site-tile-310x310.png" />
        <meta name="msapplication-TileColor" content="#0078d7" />
        <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
        <link rel="icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="36x36" href="/android-chrome-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-chrome-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-chrome-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-chrome-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/android-chrome-128x128.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-chrome-144x144.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/android-chrome-152x152.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/android-chrome-256x256.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/android-chrome-384x384.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="36x36" href="/icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icon-128x128.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="160x160" href="/icon-160x160.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="196x196" href="/icon-196x196.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/icon-256x256.png" />
        <link rel="icon" type="image/png" sizes="384x384" href="/icon-384x384.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-16x16.png" />
        <link rel="icon" type="image/png" sizes="24x24" href="/icon-24x24.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32x32.png" />
        <link rel="manifest" href="/manifest.json"></link>
      </Head>
      {children}
    </>
  )
}