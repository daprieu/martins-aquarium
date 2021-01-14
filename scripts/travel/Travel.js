/**
 *  Travels which renders individual travel objects as HTML
 */
export const Travel = (travel) => {
    return `
        <section class="travel card">
            <div><img  class="travel__image image--card" src="${travel.image}"></div>
            <p>Quote:</p>
            <div class="travel__text">${travel.text}</div>
            <p>Location:</p>
            <div class="travel__location">${travel.location}</div>
            <p>Date:</p>
            <div class="travel__date">${travel.date}</div>
        </section>
    `
} 