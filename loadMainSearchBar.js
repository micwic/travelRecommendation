        // insère le code html du fichier mainSearchBar.html dans la balise avec l'id mainSearchBar
        async function loadMainSearchBar() {
            try {
                const response = await fetch('mainSearchBar.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de mainSearchBar.html');
                }
                const mainSearchBarContent = await response.text();
                document.getElementById('mainSearchBar').innerHTML = mainSearchBarContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        //
        loadMainSearchBar();