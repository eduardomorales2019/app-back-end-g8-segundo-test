const user = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/Users.js");
// solo metodo de logueo de usuario
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// ==palabra secreta jwt
const privateKey = process.env.PRIVATE_KEY;

const login = async (req, res) => {
  const { email, password } = req.body;
  //(1. verificar que el usuario exista)
  try {
    const userFound = await user.findByEmail(email);
    const passwordForDataBAse = userFound[0].password;
    // console.log(userFound[0], "user Found");

    //?  SI NO ES UUSUARIO VALIDO
    if (!userFound) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    //?2 si el USUARIO EXISTE REVISAR LAS CONTRASEÑA PROPORCIONADA SEA LA CORRECTA
    const isPasswordEqual = await bcrypt.compare(password, passwordForDataBAse); // (2. verificar que la contraseña sea correcta), com parametros la contraseña que ingreso el usuario y la contraseña que esta en la base de datos

    ///?  3. REGRESAR  MENSAJE  SI LA CONTRASEÑA ES INCORRCTA
    if (!isPasswordEqual) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }
    if (isPasswordEqual) {
      //!   SI LA CONTRAÑEA ES CORRECTA GENERAR EL TOKEN
      // 	//? 4. GENERAR TOKEN
      const { id_genero, first_Name, Second_LastName, email } = userFound[0];
      const DatosNombre = { first_Name, Second_LastName };
      // jwt.sign(payload, secretOrPrivateKey, [options, callback])
      const token = jwt.sign(
        { email, completeName: DatosNombre, rol: "Admin" },
        privateKey,
        {
          // !AQUI IRIA EL EPOC, EL TIEMPO DE EXPIRACION, PERO USAMOS MIN O HRS MEJOR, ES UN TIMESTAND DE UNIX
          expiresIn: "1h",
        }
      );
      console.log(token, "token general 😎");
      return res.status(200).json({
        message: "Usuario logeado correctamente",
        token,
      });
    }

    // ============CATCH  ============
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login };
