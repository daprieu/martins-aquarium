// import { useFish } from "/scripts/fish/FishDataProvider.js"
import { Fish } from "/scripts/fish/Fish.js"
import { mostHolyFish, nonHolyFish, soldierFish } from "./FishDataProvider.js"
/**
 *  FishList which renders individual fish objects as HTML
 */


export const FishList = () => {
// Make function to reduce repition
const BuildFishListHTML = (arrayofFish, heading) => {
    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = `<h3>${heading}</h3>`
    for (const fishObj of arrayofFish) {
            /*
                Invoke the Fish component function
                and pass the current fish object as an argument.
                Each time, add the return value to the
                fishHTMLRepresentations variable with `+=`
            */
            fishHTMLRepresentations += Fish(fishObj)
        }
    return fishHTMLRepresentations
    }
    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishList")
    
    const holyFishArray = mostHolyFish()
    const holyFishHTMLRepresentations = BuildFishListHTML(holyFishArray, "Holy Fish")

    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentations = BuildFishListHTML(soldierFishArray, "Soldier Fish")

    const regFishArray = nonHolyFish()
    const regFishHTMLRepresentations = BuildFishListHTML(regFishArray, "Regular Fish")



    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <article class="fishList">
            ${holyFishHTMLRepresentations}
        </article>
        <article class="fishList">
            ${soldierFishHTMLRepresentations}
        </article>
        <article class="fishList">
            ${regFishHTMLRepresentations}
        </article>
    `
}