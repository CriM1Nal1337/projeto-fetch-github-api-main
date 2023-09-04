const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
            <img src= "${user.avatarUrl}" alt="Foto do perfil do usuário">
                <div class="data">
                    <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                    <br>
                    <p><i class="fas fa-users"></i> Seguidores: (${user.followers ?? 'Não encontrado/Não tem seguidores'}) Seguindo: (${user.following ?? 'Não encontrado/Não segue ninguém'})</p>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
        <div class="about">
            <ul>
                <li><i class="fas fa-utensils"></i> ${repo.forks ?? 'Não há forks'}</li>
                <li><i class="fas fa-star fa-spin"  style="color: #faf200;"></i> ${repo.stargazers_count ?? 'Não há stars'
                }</li>
                <li><i class="fas fa-eye"></i> ${repo.watchers ?? 'Não contém "watchers"'}</li>
                <li><i class="fas fa-laptop-code"></i> ${repo.language ?? 'Não há Linguagem'}</li>
            </ul>
        </div>
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    </li>`)
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