const Parser = require('rss-parser');
const fs = require('fs').promises;
const path = require('path');

exports.handler = async (event) => {
    try {
        console.log('Fetching posts from Medium...');
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
                guid: item.guid,
                lastUpdated: new Date().toISOString()
            }));

        // Write to the public directory
        const filePath = path.join(process.env.LAMBDA_TASK_ROOT, 'medium-posts.json');
        await fs.writeFile(filePath, JSON.stringify({ posts }, null, 2));
        
        console.log('Posts updated successfully');
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Posts updated successfully' })
        };
    } catch (error) {
        console.error('Error updating posts:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to update blog posts' })
        };
    }
}; 