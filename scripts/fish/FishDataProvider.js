const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Austrailia",
        length: "2 in",
        diet: "seafood",
        image: "logo/fishPics/nemo.jpeg"
    },
    {
        name: "Sue Jorge",
        species: "Physalia",
        location: "n/a",
        length: "165 feet",
        diet: "seafood",
        image: "logo/fishPics/manOfWar.jpeg"
    },
    {
        name: "Doc",
        species: "A. sohal",
        location: "Read Sea",
        length: "16 in",
        diet: "seafood",
        image: "logo/fishPics/tang.jpeg"
    },
    {
        name: "Spike",
        species: "nigroviridis",
        location: "Southeast Asia",
        length: "16 in",
        diet: "seafood",
        image: "logo/fishPics/puff.jpeg" 
    },
    {
        name: "Leaf",
        species: "taeniolatus",
        location: "Australian waters of the E Indian Ocean",
        length: "16 in",
        diet: "seafood",
        image: "logo/fishPics/weedy.jpeg" 
    },
]

export const useFish = () => {
    return fishCollection.slice()
}
