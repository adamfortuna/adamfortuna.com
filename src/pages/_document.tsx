import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600;1,700;1,900&family=Pacifico&family=Quicksand:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-sky-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
