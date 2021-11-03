import axios from 'axios'

export function getUserDetails() {
    const link = 
    'http://localhost:3001/api/auth' 
    // 'https://sevinco.herokuapp.com/api/auth'

    return axios.get(link, {
        withCredentials: true
    })
}

export function getGuilds() {
    const link = 
    'http://localhost:3001/api/discord/guilds' 
    // 'https://sevinco.herokuapp.com/api/discord/guilds'

    return axios.get(link, {
        withCredentials: true
    })
}