const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDatapath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((registeredHomes) => {
      if (registeredHomes.includes(homeId)) {
        console.log("Home is already marked favourite");
        callback(null);
      } else {
        registeredHomes.push(homeId);
        fs.writeFile(
          favouriteDatapath, // correct path
          JSON.stringify(registeredHomes), //correct variable
          callback,
        );
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDatapath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else callback([]);
    });
  }
};
