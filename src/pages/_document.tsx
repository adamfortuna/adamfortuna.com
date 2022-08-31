import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&family=Pacifico&family=Quicksand:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-[#b4dfef] text-sky-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
