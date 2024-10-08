        // insère le code html du fichier mainNavBar.html dans la balise avec l'id mainNavBar
        async function loadMainNavBar() {
            try {
                const response = await fetch('mainNavBar.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de mainNavBar.html');
                }
                const mainNavBarContent = await response.text();
                document.getElementById('mainNavBar').innerHTML = mainNavBarContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        //
        loadNavBar();