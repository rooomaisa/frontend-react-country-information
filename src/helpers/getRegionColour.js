// Schrijf een helper-functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina. staat onder .region

function getRegionColour (region){
    switch(region) {
        case 'Africa':
            return 'region-africa';    // CSS-class voor Afrika
        case 'Americas':
            return 'region-americas';  // CSS-class voor Amerika's
        case 'Asia':
            return 'region-asia';      // CSS-class voor Azië
        case 'Europe':
            return 'region-europe';    // CSS-class voor Europa
        case 'Oceania':
            return 'region-oceania';   // CSS-class voor Oceanië
        default:
            return 'region-default';   // CSS-class voor onbekende regio's
    }



}

export default getRegionColour;