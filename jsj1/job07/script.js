function jourTravaille(date) {
    let joursFeries = [
        '2024-01-01', // Jour de l'An
        '2024-04-01', // Lundi de Pâques
        '2024-05-01', // Fête du Travail
        '2024-05-08', // Victoire 1945
        '2024-05-30', // Ascension
        '2024-07-14', // Fête nationale
        '2024-08-15', // Assomption
        '2024-11-01', // Toussaint
        '2024-11-11', // Armistice 1918
        '2024-12-25'  // Noël
    ]; // Tableau comprenant les jours fériés de 2024

    let jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    let mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    // Tableau pour respectivement les jours et mois 

    let dateStr = date.toISOString().slice(0, 10);
    // Convertit l'objet Date en une chaîne de caractères au format YYYYMMDD, slice quant à lui permet d'extraire seulement les 10 premiers caractères (la suite correspondant aux horaires)
    
    let estUnJourFerie = joursFeries.includes(dateStr);
    let estUnWeekend = date.getDay() === 0 || date.getDay() === 6;
    // Comme pour python 1 vaut 0 et 7 6, dimanche correspond à 0 et samedi 6

    let jourSemaine = jours[date.getDay()];
    let jour = date.getDate();
    let moisAnnee = mois[date.getMonth()] + ' ' + date.getFullYear();

    if (estUnJourFerie) {
        console.log('Le ' + jourSemaine + ' ' + jour + ' ' + moisAnnee + ' est un jour férié.');
    } else if (estUnWeekend) {
        console.log('Le ' + jourSemaine + ' ' + jour + ' ' + moisAnnee + ' est un week-end');
    } else {
        console.log('Le ' + jourSemaine + ' ' + jour + ' ' + moisAnnee + ' est un jour travaillé.');
    }
}

let dates = [
    new Date('2024-12-25'),
    new Date('2024-12-26'),
    new Date('2024-12-28')
];

for (let i = 0; i < dates.length; i++) {
    jourTravaille(dates[i]);
}


