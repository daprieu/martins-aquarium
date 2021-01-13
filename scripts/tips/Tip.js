/**
 *  Tips which renders individual tip objects as HTML
 */
export const Tips = (tip) => {
    return `
        <section class="tip card">
            
            <div class="tip__filtration">Filtration: ${tip.filtration}</div>
            <div class="tip__pH">pH: ${tip.pH}</div>
            <div class="tip__nitrates">Nitrates: ${tip.nitrates}</div>
            <div class="tip__food">Food: ${tip.food}</div>
            <div class="tip__water">Water: ${tip.water}</div>
        </section>
    `
}