export const getClients = async () => {
    const myData = await $fetch("http://localhost:3000/api/clients");
    return myData;
};