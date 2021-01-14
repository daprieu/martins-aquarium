const travel = [
    {
        image: "/logo/fishPics/holyhead.jpg",
        text: "One of my favorite locations off the beaten path. Its a 3 mile hike in from the parking lot with lots of wildife to see and sights to explore. Much of the tidal area is covered with a thick grean algea that can be tricky to walk on.",
        location: "Holyhead, Wales",
        date: "October 9th, 2018"
    },
    {
        image: "/logo/fishPics/bonifacio.jpeg",
        text: "To travel to this spot you must arrive by boat. Thankfully it being in the Mediteranean the weather is fair most of the year and makes for a fine day of looking for fish and drinking wine.",
        location: "Bonifacio, Corsica",
        date: "july 20th, 2016"
    },

]

export const useTravel = () => {
    return travel.slice()
}  



