import { useLocation } from "/scripts/locations/LocationDataProvider.js"
import { Location } from "/scripts/locations/Location.js"
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

        // Generate all of the HTML for all of the fish
        let locationHTMLRepresentations = ""
        for (const locationObj of locations) {
            
            /*
                Invoke the Fish component function
                and pass the current fish object as an argument.
                Each time, add the return value to the
                fishHTMLRepresentations variable with `+=`
            */
           locationHTMLRepresentations += Location(locationObj)
        }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="locationList">
            ${locationHTMLRepresentations}
        </article>
    `
}