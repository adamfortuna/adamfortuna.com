import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect('https://feeds.feedburner.com/adamfortuna')
}
