import axios from 'axios'

const API_URL = "https://udarhaogltrjyfaqapgo.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkYXJoYW9nbHRyanlmYXFhcGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTkxNTcsImV4cCI6MjA2NDU5NTE1N30._CLhHC8MMobLktwX-tiVQdyMeOtWGiqs7vFW8rj3Hr0"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}