export const getPanierItems = () => {
    const panierItems = localStorage.getItem('panierItems')? JSON.parse(localStorage.getItem('panierItems')) : [];
    return panierItems
}

export const setPanierItems = (panierItems) => {
    localStorage.setItem("panierItems" , JSON.stringify(panierItems))
}