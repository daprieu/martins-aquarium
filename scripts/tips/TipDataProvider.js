const tips = [
    {
        filtration: "Check Filtration, pumps running and filters are clean",
        ph: "pH can be fish specific and needs to be checked regularly",
        nitrates: "Nitrates can be toxic to fish and need to be eliminated",
        food: "feeding too much or too often can created more fish waste inreacsing nitrates or cause a bacteria bloom both are negatives and you want to avoid",
        water: "sometimes to get things back to normal is doing regular water changes roughly 20% weekly",
       
    },

]

export const useTips = () => {
    return tips.slice()
}