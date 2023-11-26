const apiKey = 'ascTyQ87C60ZxNX9ZQhkTFEwpnRpJJev';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);