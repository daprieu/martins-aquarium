/**
 *  Location which renders individual location objects as HTML
 */
export const Location = (location) => {
    return `
        <section class="location card">
            <div><img  class="location__image" src="${location.image}" /></div>
            <div class="location__city">${location.city}</div>
            <div class="location__country">${location.country}</div>
            <div class="location__waterBody">${location.waterBody}</div>
        </section>
    `
}