const jwt = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY;

//  =============
const ValidateJwT = (req, res, next) => {
  const headers = req.headers;
  if (headers.authorization) {
    // ! hay que recuperer el token del header.

    const token = headers.authorization.split(" ")[1]; // aqui se separa el token , ya que el splitk nosd a un arreto con dos elementos. y solo escogemos el segundo elemento.

    const [portador, token1] = headers.authorization.split(" "); // aqui se separa el token , ya que el splitk nosd a un arreto con dos elementos. y solo escogemos el segundo elemento.
    //next();

    //!VALIDAR
    //? aqui puede llevar un arrow fucntion, para ser asyncrono y no tener que esperar a que se ejecute el next()
    try {
      // otra forma para validar el token con date.now() sin verify
      //! lo que hace validate es muy potente.:
      /*
      valida la expiracion
      valida el token firmado  correcto 
      valida firma o palabra secreta  

      */

      const jwtDecoded = jwt.verify(token, privateKey);
      console.log(jwtDecoded, "jwtDecoded");
      const { rol } = jwtDecoded;
      console.log(" SOY EL ROL", rol);
      // AQUI AGREGO AL REQ EL ROL
      req.rolUser = rol;
      req.languageUser = "Spanish";
      console.log("SOY EL ROL DEL REQ", req.rolUser);
      next(); // esto es para que pase al siguiente middleware
    } catch (error) {
      console.log(error, "error");
      return res.status(401).json({
        message: "Token invalido",
        error,
      });
    }
  } else {
    res.status(401).json({ message: "no tiene token" });
  }
  next();
};

module.exports = ValidateJwT;
