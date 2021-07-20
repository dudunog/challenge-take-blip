import axios from "axios";

const url = 'https://api.github.com/orgs/takenet/repos';

class GithubRepository {
    async _getAllRepositories() {
        const result = await axios.get(url);
        if (result) return result.data;
    }

    async _getLanguageRepositories(language) {
        const allRepositories = await this._getAllRepositories();
        const languageRepositories = allRepositories.filter(repository => {
            return repository.language = language
        })
        
        var fiveLanguageRepositoreis = [];

        for(let i = 0; i < 5; i++) {
            fiveLanguageRepositoreis.push({
                id: languageRepositories[i].id,
                name: languageRepositories[i].name,
                description: languageRepositories[i].description,
                created_at: languageRepositories[i].created_at,
            });
        }

        return fiveLanguageRepositoreis;
    }
}

export default GithubRepository;