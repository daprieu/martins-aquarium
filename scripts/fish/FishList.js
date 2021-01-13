import { useFish } from "/scripts/fish/FishDataProvider.js"
import { Fish } from "/scripts/fish/Fish.js"
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishList")
    const fishesArray = useFish()

        // Generate all of the HTML for all of the fish
        let fishHTMLRepresentations = ""
        for (const fishObj of fishesArray) {
            
            /*
                Invoke the Fish component function
                and pass the current fish object as an argument.
                Each time, add the return value to the
                fishHTMLRepresentations variable with `+=`
            */
           fishHTMLRepresentations += Fish(fishObj)
        }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}