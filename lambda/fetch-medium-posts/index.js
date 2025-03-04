const Parser = require('rss-parser');

exports.handler = async (event) => {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL('https://medium.com/feed/@cyberwithatharva');
        
        const posts = feed.items
            .filter(item => 
                item.title && 
                item.content && 
                item.pubDate && 
                item.link && 
                item.guid
            )
            .map(item => ({
                title: item.title,
                content: item.content,
                pubDate: item.pubDate,
                link: item.link,
                guid: item.guid
            }));

        return {
            statusCode: 200,
            headers: {
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
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({ error: 'Failed to fetch blog posts' })
        };
    }
}; 