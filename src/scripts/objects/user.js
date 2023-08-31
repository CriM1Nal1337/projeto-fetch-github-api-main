const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName:  '',
    followers: '',
    following: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.userName = gitHubUser.login
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        console.log(gitHubUser);
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }