const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        locations: "Great Barrier Reef, Austrailia",
        length: "2 in",
        diet: "seafood"
    }

    {
        name: "Sue Jorge",
        species: "Physalia",
        locations: "a",
        length: "165 feet",
        diet: "seafood"
    }

    {
        name: "Doc",
        species: "A. sohal",
        locations: "a",
        length: "16 in",
        diet: "seafood"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}