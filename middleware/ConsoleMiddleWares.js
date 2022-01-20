const PrintTime = (req, res, next) => {
  const time = Date.now();
  console.log(time);
  //console.log("Headers", req.headers); // aqui se puede ver que headers esta en uso.
  //   console.log(req, "Soy req");
  console.log(`Juan  paso por aqui Time: ${time}')`);
  next();
  // importante que haga return  o pase a next para que continue con la ejecucion.
};

const PrintName = (req, res, next) => {
  console.log("segundo middle Ware ");
  next();
};

module.exports = { PrintTime, PrintName };
