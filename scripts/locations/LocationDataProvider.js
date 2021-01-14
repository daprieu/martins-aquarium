const locationCollection = [
    {
        city: "Key West",
        country: "United States",
        waterBody: "Atlantic",
        image: "logo/fishPics/kwSalty.jpeg"
    },
    {
        city: "Adelaide",
        country: "Australia",
        waterBody: "Indian Ocean",
        image: "logo/fishPics/strailiaReef.jpeg"
    },
    {
        city: "Nassau",
        country: "Bahamas",
        waterBody: "Atlantic",
        image: "logo/fishPics/coralCollection.jpeg"
    },
    {
        city: "Wailea-Makena",
        country: "Hawaii",
        waterBody: "Pacific Ocean",
        image: "logo/fishPics/fish in net.jpeg"
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}