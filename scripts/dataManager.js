export const getPosts = () => {

    return fetch ("https://icanhazdadjoke.com",{
        method:"GET",
        headers: {
            "Accept": "application/json"
        }
    })
}