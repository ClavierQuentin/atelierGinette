export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split("/");
    return{
        page: request[1],
        destination: request[2],
        id: request[3]
    } ;
}
export const rerender = async (component) => {
    document.getElementById('main-conteneur').innerHTML = await component.render();
    await component.after_render();
}