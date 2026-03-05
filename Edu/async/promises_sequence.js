
import fetch from 'node-fetch';

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
];

// Function to fetch a single URL
function fetchUrl(url) {
    return fetch(url, 
        {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Referer': 'https://google.com/',
                'Connection': 'keep-alive',
                'Cookie': 'your_cookie_here', // Add cookies if needed
            }
        }
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Fetch error:', error.message);
            return null; // Return null in case of an error so it doesn't break the chain
        });
}

// Array to hold fetched data
const results = [];

// Sequentially fetching the URLs and saving the results
urls.reduce((promiseChain, currentUrl) => {
    return promiseChain
        .then(() => fetchUrl(currentUrl))  // Fetch the current URL
        .then((data) => {
            if (data) results.push(data); // Save data if fetched successfully
        });
}, Promise.resolve()) // Initial resolved promise to start the chain
    .then(() => {
        console.log('All data fetched:');
        console.log(results); // Log all the fetched data at the end
    });