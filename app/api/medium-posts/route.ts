import Parser from 'rss-parser'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const parser = new Parser()
    const feed = await parser.parseURL('https://medium.com/feed/@cyberwithatharva')
    
    const posts = feed.items
      .filter((item): item is Parser.Item & Required<Pick<Parser.Item, 'title' | 'content' | 'pubDate' | 'link' | 'guid'>> => {
        return !!item.title && !!item.content && !!item.pubDate && !!item.link && !!item.guid
      })
      .map(item => ({
        title: item.title,
        content: item.content,
        pubDate: item.pubDate,
        link: item.link,
        guid: item.guid,
      }))

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
} 