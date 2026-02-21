// Import fetch if using Node.js (uncomment the next line if needed)
import fetch from 'node-fetch';

// Function to fetch data using async/await
async function fetchData(url) {
    try {
        const response = await fetch(url); // Make the GET request
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText); // Check for HTTP errors
        }
        const data = await response.json(); // Parse JSON if response is ok
        return data;
    } catch (error) {
        throw new Error('Fetch error: ' + error.message); // Handle any errors
    }
}

// URL of the API endpoint
const url = 'https://jsonplaceholder.org/posts/1';

// Using the fetchData function
(async () => {
    try {
        const data = await fetchData(url);
        console.log('Post Title:', data.title); // Handle success
        console.log('Post Body:', data.content);
    } catch (error) {
        console.error('Error:', error.message); // Handle error
    }
})();
