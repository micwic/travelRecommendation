        // insère le code html du fichier mainSearchBar.html dans la balise avec l'id mainSearchBar
        async function loadMainSearchBar() {
            try {
                const response = await fetch('./mainSearchBar.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de mainSearchBar.html');
                }
                const mainSearchBarContent = await response.text();
                document.getElementById('mainSearchBar').innerHTML = mainSearchBarContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
            // Associated logic content after DOM is created to avoid unexpected error due to async function execution
            // check the value entered in search criteria input field after search button is clicked
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
                    // initialize entered value
                    document.getElementById('searchCriteria').value = '';
                    return false;
                }
                // select and display recommandation corresponding to search criteria
                
            })
        }
        // Execute the function
        loadMainSearchBar();