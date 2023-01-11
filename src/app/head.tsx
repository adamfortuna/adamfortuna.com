const Head = () => {
  return (
    <>
      <title>👋 Hey hey! I'm Adam.</title>
      <meta
        name="description"
        content="Hey hey! I'm a Adam Fortuna, a full-stack product developer living in Salt Lake City, UT."
      />
      <link rel="alternate" type="application/rss+xml" href={`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/feed`} />
    </>
  )
}
export default Head
