// Schrijf een helper-functie die getallen omzet en afrond naar miljoenen;

function roundToMillions (number){
    return (number/1_000_000).toFixed(1) + 'M';






}
export default roundToMillions;