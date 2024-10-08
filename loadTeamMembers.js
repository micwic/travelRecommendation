        async function loadTeamMembers() {
            try {
                const response = await fetch('./team_members.json');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du fichier team_members.json');
                }
                const data = await response.json();
                const teamContainer = document.getElementById('teamMembers');
                
                data.teamMembers.forEach(member => {
                    const memberDiv = document.createElement('div');
                    memberDiv.innerHTML = `
                        <h2>${member.name}</h2>
                        <p>${member.responsibility}</p>
                        <p>${member.jobTitle}</p>
                    `;
                    teamContainer.appendChild(memberDiv);
                });
            } catch (error) {
                console.error('Erreur:', error);
            }
        }

        loadTeamMembers();