        // insère le code html du fichier mainLogo.html dans la balise avec l'id mainLogo
        async function loadMainLogo() {
            try {
                const response = await fetch('./mainLogo.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de mainLogo.html');
                }
                const mainLogoContent = await response.text();
                document.getElementById('mainLogo').innerHTML = mainLogoContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        //
        loadMainLogo();