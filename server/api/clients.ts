import userData from 'public/clients.json'
export default defineEventHandler((event) =>{
    return userData 
})