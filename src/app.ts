import { Animal } from './animal';

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Executing / endpoint');
    res.send('Hello There!');
  });

  app.listen(port, err => {
      console.log('==================');
      console.log('Starting server...');
      console.log('==================');
    if (err) {
      return console.error(err);
    }
    return console.log(`Server is listening on ${port} - Date: ${new Date().toISOString()}`);
  });

  app.get('/:option', (req, res) => {
    console.log('Executing /option endpoint');
    let answer: Animal;
    const { option } = req.params;

    switch (option) {
        case 'cat':
        case 'dog':
        case 'horse':
            answer = { name: option , class: 'mammal' };
            break;
        case 'parrot':
        case 'blackbird':
        case 'crow':
            answer = { name: option , class: 'bird' };
            break;
        case 'turtle':
        case 'frog':
        case 'alligator':
            answer = { name: option , class: 'reptile' };
            break;
        case 'whale':
        case 'dolphin':
        case 'shark':
            answer = { name: option , class: 'fish' };
            break;            
        default:
            answer = { name: option , class: 'others' };
            break;
    };
   
    console.log('Finished /option endpoint');
    res.json(answer);
});
