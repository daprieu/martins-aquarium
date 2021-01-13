const locationCollection = [
    {
        city: "Key West",
        country: "United States",
        waterBody: "Atlantic",
        image: "logo/fishPics/nemo.jpeg"
    },
    {
        city: "Middle, TN",
        country: "United States",
        waterBody: "confidential",
        image: "logo/fishPics/nemo.jpeg"
    },
]

export const useLocation = () => {
    return locationCollection.slice()
}