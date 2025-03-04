const Parser = require('rss-parser');
const https = require('https');

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

// Function to extract image URL from content
const extractImageFromContent = (content) => {
    if (!content) return null;
    
    // First try to find Medium's high-resolution images
    const mediumImageRegex = /<img[^>]+src="(https:\/\/cdn-images.*?\.(?:png|jpg|jpeg|gif))/i;
    const mediumMatch = content.match(mediumImageRegex);
    if (mediumMatch) {
        console.log('Found Medium image:', mediumMatch[1]);
        return mediumMatch[1];
    }
    
    // Then try to find any image
    const generalImageRegex = /<img[^>]+src="([^"]+\.(?:png|jpg|jpeg|gif))/i;
    const generalMatch = content.match(generalImageRegex);
    if (generalMatch) {
        console.log('Found general image:', generalMatch[1]);
        return generalMatch[1];
    }
    
    console.log('No image found in content');
    return null;
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

exports.handler = async (event) => {
    try {
        console.log('Fetching RSS feed from:', MEDIUM_RSS_URL);
        const rawFeed = await fetchRSS(MEDIUM_RSS_URL);
        console.log('Raw feed received, parsing...');
        
        const feed = await parser.parseString(rawFeed);
        console.log('Feed parsed, processing items...');
        
        const posts = feed.items.map(item => {
            // Get content from content:encoded first, then fallback to content
            const content = item['content:encoded'] || item.content || '';
            console.log('Processing post:', item.title);
            console.log('Content length:', content.length);
            console.log('Content preview:', content.substring(0, 200));
            
            // Try multiple sources for the image
            const imageUrl = extractImageFromContent(content);
            console.log('Extracted image URL:', imageUrl);
            
            return {
                title: item.title || '',
                content: content, // Make sure to include the full content
                pubDate: item.pubDate || '',
                link: item.link || '',
                guid: item.guid || '',
                creator: item.creator || '',
                categories: item.categories || [],
                imageUrl: imageUrl
            };
        });

        console.log('Successfully processed', posts.length, 'posts');
        
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ 
                posts,
                timestamp: new Date().toISOString(),
                source: MEDIUM_RSS_URL
            })
        };
    } catch (error) {
        console.error('Error in Lambda function:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ 
                error: 'Failed to fetch posts', 
                message: error.message,
                timestamp: new Date().toISOString()
            })
        };
    }
}; 