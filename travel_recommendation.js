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

document.getElementById('searchCriteriaButton').addEventListener('click', function() {
    // get input search criteria and remove unwanted blanks or unwanted uppercase
    let internalSearchCriteria = document.getElementById('searchCriteria').value.trim().toLowerCase();
    // check the search criteria
    if ( internalSearchCriteria ===  "beach" || internalSearchCriteria === "beaches" ) {
        internalSearchCriteria = "beaches";
    } 
    else if ( internalSearchCriteria === "temple" || internalSearchCriteria === "temples" ) {
        internalSearchCriteria = "temples";
    }
    else if ( internalSearchCriteria === "country" || internalSearchCriteria === "countries" ) {
        internalSearchCriteria = "countries";
    }
    else {
        alert('Possible destinations are : temples, beaches or countries!');
    };
})