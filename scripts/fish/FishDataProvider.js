const fishCollection = [
    {
        name: "Nemo",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Austrailia",
        length: 3,
        diet: "seafood",
        image: "logo/fishPics/nemo.jpeg"
    },
    {
        name: "Sue Jorge",
        species: "Physalia",
        location: "n/a",
        length: 165,
        diet: "seafood",
        image: "logo/fishPics/manOfWar.jpeg"
    },
    {
        name: "Doc",
        species: "A. sohal",
        location: "Read Sea",
        length: 16 ,
        diet: "seafood",
        image: "logo/fishPics/tang.jpeg"
    },
    {
        name: "Spike",
        species: "nigroviridis",
        location: "Southeast Asia",
        length: 9,
        diet: "seafood",
        image: "logo/fishPics/puff.jpeg" 
    },
    {
        name: "Leaf",
        species: "taeniolatus",
        location: "Australian waters of the E Indian Ocean",
        length: 7,
        diet: "seafood",
        image: "logo/fishPics/weedy.jpeg" 
    },
]

export const useFish = () => {
    return fishCollection.slice()
}

// Martins Mayan Vision
// const fishSizeArray = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]






export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []
    for (const fishSizeObj of fishCollection) {
        if (fishSizeObj.length % 3 === 0) 
            holyFish.push(fishSizeObj)    
            console.log("holyFish", holyFish)          
    }
    return holyFish
    
}


export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldiers = []
    for (const fishSizeObj of fishCollection) {
        if (fishSizeObj.length % 5 === 0) 
            soldiers.push(fishSizeObj)
            console.log("soldier", soldiers)
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let regularFish = []
    for (const fishSizeObj of fishCollection) {
        if (fishSizeObj.length % 3 !== 0 && fishSizeObj.length % 5 !== 0)
            regularFish.push(fishSizeObj)
            console.log("reg", regularFish)
    }  
    return regularFish
}

