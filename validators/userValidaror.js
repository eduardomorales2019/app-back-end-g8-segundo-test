const { celebrate, Joi, errors, Segments } = require("celebrate");

const enum_roles = require("../utilities/Roles.Enum");

module.exports = {
  createUsers: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      first_Name: Joi.string().required(),
      Second_LastName: Joi.string().required(),
      email: Joi.string().required().email(),
      age: Joi.string().required(),
      phone: Joi.number(),
      id_genero: Joi.number().required(),
      id_shoe: Joi.number().required(),
      id_roles: Joi.string().required(),
      is_active: Joi.boolean(),
      password: Joi.string().required(),
      //duda por array
      //role: Joi.string()
      //.valid("Admin", "Customer", "Seller", "Invite")
      // .valid(enum_roles) //! method no accepted array
      //.required(),
      // ESTAS SERIAN REFERENFIACIONES A LA TABLA ROLEs
      id_roles: Joi.valid("Admin", "Customer", "Seller", "Invite").required(),
      // ALTERNATIVA PARA VALORES POR DEFAULT
      //   role: Joi.string().default("custumer"),
      //roles de Admin, , Seller, Customer SOLO ESTOS ROLES. se crea utilidad de enum_roles.js
      //   para poder validar que el role sea uno de los roles validos
    }),
  }),
};
console.log("estoy en createUsers");

//{ es un objeto } como  objetos pueden tener propiedades y metodos. y los podemos pasar !!!  estamops ejcutando la funcion celebrate!!
