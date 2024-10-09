async function readTravel_recommandation_api() {
    try {
            // read the file
            const response = await fetch('./travel_recommandation_api.json');
            if (!response.ok) {
                // error management, throw a specific error message that help to locate the error
                throw new Error('Erreur lors du chargement du fichier travel_recommandation_api.json');
            }
            // parse automatically/natively the json in a javascript objet
            const data = await response.json();
            // log the content to the console
            console.log(data);
    } catch (error) {
        // log the error to the console
        console.error('Error: ', error);
    }
}
// execute the function
readTravel_recommandation_api();