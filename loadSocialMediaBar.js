        // insère le code html du fichier mainSocialMediaBar.html dans la balise avec l'id mainSocialMediaBar
        async function loadSocialMediaBar() {
            try {
                const response = await fetch('./socialMediaBar.html');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement de SocialMediaBar.html');
                }
                const socialMediaBarContent = await response.text();
                document.getElementById('socialMediaBar').innerHTML = socialMediaBarContent;
            } catch (error) {
                console.error('Erreur:', error);
            }
        }
        //
        loadSocialMediaBar();