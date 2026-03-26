const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    }),
  );
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "index",
    }),
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favouriteIds) => {
    Home.fetchAll((allHomes) => {
      const favouriteHomes = allHomes.filter((home) =>
        favouriteIds.includes(home.id),
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFav = (req, res, next) => {
  console.log("came to add to favourite", req.body);
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favourite");
    }
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeid = req.params.homeid;
  console.log("At home details page", homeid);
  Home.findById(homeid, (home) => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      console.log("Home Details Found", home);
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home Detail",
      });
    }
  });
};

//since we are not using the variables anywhere so directly exports likhskte h

// const getAddHome = (req, res, next) => {
//   res.render("addHome", { pageTitle: "Add Home to airbnb" });
// };
// exports.getAddHome = getAddHome
