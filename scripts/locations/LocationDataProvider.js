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
]

export const useLocation = () => {
    return locationCollection.slice()
}