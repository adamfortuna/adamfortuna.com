/* eslint-disable react/no-invalid-html-attribute */
const GlobalHead = () => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <link rel="alternate" type="application/rss+xml" href="https://feeds.feedburner.com/adamfortuna" />
      <link href="https://github.com/adamfortuna" rel="me" />
      <link rel="webmention" href="https://wp.adamfortuna.com/wp-json/webmention/1.0/endpoint" />
      <link rel="http://webmention.org/" href="https://wp.adamfortuna.com/wp-json/webmention/1.0/endpoint" />
    </>
  )
}
export default GlobalHead
