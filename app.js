
const apiURL = 'https://wordsapiv1.p.mashape.com/words/example'
fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Fetch error:', error);
    });

    

