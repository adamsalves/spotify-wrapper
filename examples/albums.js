/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import { searchAlbums } from '../src/search';

const albums = searchAlbums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));

