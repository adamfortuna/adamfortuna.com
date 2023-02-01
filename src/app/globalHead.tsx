/* eslint-disable react/no-invalid-html-attribute */
const GlobalHead = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_URL}/api/feed`} />
      <link href="https://github.com/adamfortuna" rel="me" />
    </>
  )
}
export default GlobalHead
