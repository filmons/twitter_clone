// const Promo = require("../models/promo");

// exports.findAll = (request, response) => {
//   const { user } = request;

//   Promo.getAll((error, promos) => {
//     if (error) {
//       response.send(error.message);
//     }

//     console.log(user);

//     response.render("home.ejs", { promos, user });
//   });
// }

// exports.findOne = (request, response) => {
//   const { id } = request.params;
//   const { user } = request;

//   Promo.getOne(id, (error, result) => {
//     if (error) {
//       response.send(error.message);
//     }

//     const students = result;
//     const promoName = result[0].name;

//     response.render("promo.ejs", { promoName, students, user });
//   });
// }

// exports.addOne = (request, response) => {
//   Promo.create(request.body, (error, result) => {
//     if (error) {
//       response.send(error.message);
//     }

//     response.redirect("/");
//   })
// }