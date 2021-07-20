import GithubRepository from './repositories/Repository.js';

const repository = new GithubRepository;
const repositories = await repository._getLanguageRepositories('c#');

export default repositories;