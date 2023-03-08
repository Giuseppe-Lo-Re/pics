import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3atkOJedn1vg6JkHsCVR65p-1zXp2Lcq70TfxspOPM8'
        },
        params: {
            query: 'forests'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;