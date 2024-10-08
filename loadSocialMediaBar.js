        // insère le code html du fichier mainSocialMediaBar.html dans la balise avec l'id mainSocialMediaBar
        async function loadSocialMediaBar() {
            try {
                const response = await fetch('mainSocialMediaBar.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de mainSocialMediaBar.html');
                }
                const mainSocialMediaBarContent = await response.text();
                document.getElementById('mainLogo').innerHTML = mainSocialMediaBarContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        //
        loadSocialMediaBar();