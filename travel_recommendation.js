// declare recommandations list object as a global variable
var recommandationsList;
// load recommandations list object from file data content
async function readTravel_recommandation_api() {
    try {
            // read the file
            const response = await fetch('./travel_recommendation_api.json');
            if (!response.ok) {
                // error management, throw a specific error message that help to locate the error
                throw new Error('Erreur lors du chargement du fichier travel_recommandation_api.json');
            }
            // parse automatically/natively the json in a javascript objet
            recommandationsList = await response.json();
            // log the content to the console
            console.log(recommandationsList);
            //
            const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const newYorkTime = new Date().toLocaleTimeString('en-US', options);
            console.log("Current time in New York:", newYorkTime);
    } catch (error) {
        // log the error to the console
        console.error('Error: ', error);
    }
}
// execute the function
readTravel_recommandation_api();