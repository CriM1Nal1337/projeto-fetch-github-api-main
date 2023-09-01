const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
            <img src= "${user.avatarUrl}" alt="Foto do perfil do usuário">
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                    <p>Seguidores (${user.followers ?? 'Não encontrado/Não tem seguidores'})</p>
                    <p>Seguindo (${user.following ?? 'Não encontrado/Não segue ninguém'})</p>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a> </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2><ul>${repositoriesItens}</ul></div>`
        }
        console.log(user);
        let eventsItens = ''
        user.events.forEach(e => {
            const repoName = e.repo.name
            const eventMessage = e.payload.commits && e.payload.commits.length > 0 ? e.payload.commits[0].message : 'Repositorio criado/Commit inicial'

            eventsItens += `<li><span>${repoName}</span> - ${eventMessage}</li>`
        });

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                        </div>`
        }


    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }