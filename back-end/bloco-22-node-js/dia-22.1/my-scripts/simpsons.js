const { fdatasync } = require('fs');

const fs = require('fs').promises;

const read = async () => {
    const fileContent = await fs.readFile('simpsons.json', 'utf-8')
    const simpsons = JSON.parse(fileContent);
    return simpsons;
};

// const main = async () => {
//     const fileContent = await read();
//     const simpsons = JSON.parse(fileContent);
//     const returnString = simpsons.map(({ id, name }) => `${id} - ${name}`)
//     console.log(returnString);

//     return simpsons;
// }

const dataCharacter = async (id) =>  {
        const fileContent = await read();
        const simpsons = JSON.parse(fileContent)
        const simpsonId = simpsons.find((character) => Number(character.id) === id)
        
        if(!simpsonId) {
            throw new Error('id não encontrado');
        }
        
        return simpsonId;
}

const removeCharacter = async () => {
    const simpsons = await read();
    return simpsons.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10)
}

const createDoc = async () => {
    const simpsons = await read();
    const family = simpsons.filter(({ id }) => Number(id) <= 4 )
    return fs.writeFile('simpsonFamily.json', JSON.stringify(family));
}

const addCharacter = async () => {
    const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8')
    const simpsonsFam = JSON.parse(fileContent);
    simpsonsFam.push({ id: '8', name: 'Nelson Muntz' });
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFam));
}

const main = () => {
    addCharacter();
}

main();