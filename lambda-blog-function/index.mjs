import Parser from 'rss-parser';
import https from 'https';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['dc:creator', 'creator'],
      ['media:content', 'media'],
      ['enclosure', 'enclosure']
    ],
  }
});

const MEDIUM_RSS_URL = 'https://medium.com/feed/@cyberwithatharva';

const extractFirstImage = (content) => {
    if (!content) return null;
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = content.match(imgRegex);
    return match ? match[1] : null;
};

const fetchRSS = async (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => { resolve(data); });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

export const handler = async (event) => {
    try {
        console.log('Fetching RSS feed from:', MEDIUM_RSS_URL);
        const rawFeed = await fetchRSS(MEDIUM_RSS_URL);
        const feed = await parser.parseString(rawFeed);
        
        const posts = feed.items.map(item => {
            const content = item.content || item['content:encoded'] || '';
            const imageUrl = item.enclosure?.url || extractFirstImage(content) || null;
            
            return {
                title: item.title,
                content: content,
                pubDate: item.pubDate,
                link: item.link,
                guid: item.guid,
                creator: item.creator,
                categories: item.categories,
                imageUrl: imageUrl
            };
        });

        console.log('Successfully fetched', posts.length, 'posts');
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ posts })
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ error: 'Failed to fetch posts', message: error.message })
        };
    }
}; 