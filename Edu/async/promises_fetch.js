import fetch from 'node-fetch';

function fetchData(url) {
    return fetch(url) // Make the GET request
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText); // Check for HTTP errors
            }
            return response.json(); // Parse JSON if response is ok
        })
        .catch((error) => {
            throw new Error('Fetch error: ' + error.message); // Handle any errors
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