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
                try {
                    // initialize
                    let recommandationsListFiltered = [];
                    // extract only necessary content to a new common array with selected occurencies
                    switch (internalSearchCriteria) {
                        case 'beaches':
                            recommandationsListFiltered = recommandationsList.beaches.map(beach => {
                                return {
                                    name: beach.name,
                                    imageUrl: beach.imageUrl,
                                    description: beach.description
                                };
                            });
                            break;
                        case 'temples':
                            recommandationsListFiltered = recommandationsList.temples.map(temple => {
                                return {
                                    name: temple.name,
                                    imageUrl: temple.imageUrl,
                                    description: temple.description
                                };
                            });
                            break;
                        case 'countries':
                            recommandationsList.countries.forEach(country => {
                                country.cities.forEach(city => {
                                recommandationsListFiltered.push({
                                    name: city.name,
                                    imageUrl: city.imageUrl,
                                    description: city.description
                                });
                            });
                        });
                            break;
                        default:
                            throw new Error('Erreur de programmation E001 dans loadMainSearch.js');
                    }
                    // get recommandationsList container and initialize it
                    const recommandationsListDiv = document.getElementById('recommandationsList');
                    recommandationsListDiv.innerHTML = '';
                    // iterate through common array to build corresping html
                    recommandationsListFiltered.forEach(element => {
                        const recommandationsItem = document.createElement('div');
                        recommandationsItem.classList.add('recommandationsItem');
                        recommandationsItem.innerHTML = `<img src="${element.imageURL}" alt="${element.name}">`;
                        const recommandationsItemText = document.createElement('div');
                        recommandationsItemText.classList.add('recommandationsItemText');
                        recommandationsItemText.innerHTML = `<h1>${element.name}</h1><p>${element.description}</p><button>Visit</button>`;
                        // put the generated content into the recommandationsList container
                        recommandationsListDiv.appendChild(recommandationsItem);
                        recommandationsListDiv.appendChild(recommandationsItemText);
                    });
                } catch (error) {
                    console.error('Erreur:', error);
                }
            }
        )}
        // Execute the function
        loadMainSearchBar();