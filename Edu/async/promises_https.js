import * as https from 'https';

// Function to fetch data using Promises
function fetchData(url) {
    return new Promise((resolve, reject) => {
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
                    resolve(json); // Resolve with the parsed data
                } catch (error) {
                    reject(new Error('Error parsing JSON: ' + error.message)); // Reject if JSON parsing fails
                }
            });
        }).on('error', (err) => {
            reject(new Error('Error with request: ' + err.message)); // Reject if the request fails
        });
    });
}

// URL of the API endpoint
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Using the fetchData function
fetchData(url)
    .then((data) => {
        console.log('Post Title:', data.title); // Handle success
        console.log('Post Body:', data.body);
    })
    .catch((error) => {
        console.error('Error:', error.message); // Handle error
    });
