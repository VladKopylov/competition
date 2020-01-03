import axios from 'axios'

const API_URL = '/api/player'

async function createPlayer(data) {
    const { firstName, lastName } = data
    const player = { firstName, lastName }
    try {
        await axios.post(`${API_URL}/create`, player)
    } catch (e) {
        console.log('Error in create player API', e)
    }
}

export const playerApi = {
    createPlayer,
}
