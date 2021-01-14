/**
 *  Tips which renders individual tip objects as HTML
 */
export const Tips = (tip) => {
    return `
        <section class="tip card">
            <p>Filtration:</p>
            <div class="tip__filtration">${tip.filtration}</div>
            <p>pH:</p>
            <div class="tip__pH">${tip.pH}</div>
            <p>Nitrates:</p>
            <div class="tip__nitrates">${tip.nitrates}</div>
            <p>Food:</p>
            <div class="tip__food">${tip.food}</div>
            <p>Water:</p>
            <div class="tip__water">${tip.water}</div>
        </section>
    `
} 