import { useTravel} from "/scripts/travel/TravelDataProvider.js"
import { Travel } from "/scripts/travel/Travel.js"
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useTips` from the data provider module

export const TravelList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const travelArray = useTravel()

        // Generate all of the HTML for all of the fish
        let travelHTMLRepresentations = ""
        for (const travelObj of travelArray) {
            
            /*
                Invoke the Fish component function
                and pass the current fish object as an argument.
                Each time, add the return value to the
                fishHTMLRepresentations variable with `+=`
            */
           travelHTMLRepresentations += Travel(travelObj)
        }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    
        <article class="travelList">
            ${travelHTMLRepresentations}
        </article>
    `
}