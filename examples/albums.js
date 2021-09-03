/* to run: npx babel-node albums.js */

global.fetch = require("node-fetch");

import SpotifyWrapper from "../src/index";

const spotify = new SpotifyWrapper({
  token:
    "BQDQ7ryE793yebTTGqULgXCDRfZLNQRRRea4dQvhppXsZHYUkCizfvRaeA3qKCRkYZJQEOimeoy_8qZ6a4BU30iwb9vB8rwsHNmnmCTt4EgaJn9DTuYK4b8Wb7sXknpyr_Fza_6lR36U01PI",
});

const albums = spotify.search.albums("Rush");

albums.then((data) => data.albums.items.map((item) => console.log(item.name)));
