import * as https from 'https';

// Define the URL of the API endpoint
const url = 'https://jsonplaceholder.org/posts/1';

// Make a GET request using https.get
https.get(url, (res) => {
    let data = '';

    // Listen for data chunks
    res.on('data', (chunk) => {
        data += chunk;
    });

    // When the response is complete
    res.on('end', () => {
        try {
            // Parse the JSON data
            const json = JSON.parse(data);
            console.log('Post Title:', json.title);
            console.log('Post Body:', json.content);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });

}).on('error', (err) => {
    console.error('Error with request:', err.message);
});