import { useTips} from "/scripts/tips/TipDataProvider.js"
import { Tips } from "/scripts/tips/Tip.js"
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerRight")
    const tipsArray = useTips()

        // Generate all of the HTML for all of the fish
        let tipsHTMLRepresentations = ""
        for (const tipObj of tipsArray) {
            
            /*
                Invoke the Fish component function
                and pass the current fish object as an argument.
                Each time, add the return value to the
                fishHTMLRepresentations variable with `+=`
            */
           tipsHTMLRepresentations += Tips(tipObj)
        }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="locationList">
            ${tipsHTMLRepresentations}
        </article>
    `
}