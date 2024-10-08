        async function loadTeamMembers() {
            try {
                const response = await fetch('./team_members.json');
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du fichier team_members.json');
                }
                const data = await response.json();
                const teamMembersContainer = document.getElementById('teamMembers');
                
                data.teamMembers.forEach(member => {
                    // create member container that will contains the two subsequent container for image and info
                    const teamMemberContainer = document.createElement('div');
                    teamMemberContainer.classList.add('teamMemberContainer');
                    // create image container and image tag into
                    const teamMemberImage = document.createElement('div');
                    teamMemberImage.classList.add('teamMemberImage');
                    teamMemberImage.innerHTML = `<img src="${member.imageURL}" alt="${member.name}" class="memberImage">`;
                    // 
                    const teamMemberInfo = document.createElement('div');
                    teamMemberInfo.classList.add('teamMemberInfo');
                    teamMemberInfo.innerHTML = `
                        <h2>${member.name}</h2>
                        <p>${member.responsibility}</p>
                        <p class="jobTitle">${member.jobTitle}</p>
                    `;
                    teamMemberContainer.appendChild(teamMemberImage);
                    teamMemberContainer.appendChild(teamMemberInfo);
                    teamMembersContainer.appendChild(teamMemberContainer);
                });
            } catch (error) {
                console.error('Erreur:', error);
            }
        }

        loadTeamMembers();