import repositories from '../../index.js';

export const repositoriesJson = (req, res) => {
    res.status(200).send({repositories});
}