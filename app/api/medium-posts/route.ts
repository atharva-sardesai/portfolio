import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const parser = new Parser()
const MEDIUM_FEED_URL = 'https://medium.com/feed/@cyberwithatharva'

export async function GET() {
  try {
    // First try the direct Medium feed URL
    let feed = null
    try {
      feed = await parser.parseURL(MEDIUM_FEED_URL)
    } catch (error) {
      // If direct feed fails, try the alternative URL format
      feed = await parser.parseURL('https://cyberwithatharva.medium.com/feed')
    }
    
    if (!feed || !feed.items) {
      throw new Error('Failed to fetch Medium feed')
    }

    const posts = feed.items.map(item => ({
      title: item.title || 'Untitled',
      content: item.content || item['content:encoded'] || '',
      pubDate: item.pubDate || new Date().toISOString(),
      link: item.link || '',
      guid: item.guid || item.link || ''
    }))

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
} 