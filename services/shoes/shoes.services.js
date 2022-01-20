const boom = require("@hapi/boom");

// ===============================clase y instancias====================================
class ShoesService {
  constructor() {
    this.shoes = [];
    this.createData();
  }

  createData() {
    this.shoes = [
      { id: 1, marca: "noke", price: 200, color: "red", isDeleted: false },
      { id: 2, marca: "edidas", price: 100, color: "white", isDeleted: true },
      { id: 3, marca: "glexi", price: 300, color: "black", isDeleted: true },
    ];
  }
  // ==========================aqui ponemos en asyncronia pata simular la basew deatos
  create(shoe) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // lo hacemos para simular la demora de la base de datos.
        this.shoes.push(shoe);
        resolve(shoe); // el shoe es el objeto nuevo que creamos. // se maneja del otro lado el async await.
      }, 2000);
    });
  }

  find() {
    const allShoes = this.shoes;
    return allShoes;
  }

  findOne(id) {
    const shoe = this.shoes.find((shoe) => shoe.id === parseInt(id));
    if (shoe) {
      return shoe;

      // 1. seleeccionar un endpints para hacer middle ware
      //2. agregar un throw error, para que se pueda lanzar una exepcion
    } else {
      // throw new Error("ese elementos no se pudo encontrar ");
      throw boom.notFound("ese elementos no se pudo encontrar "); //! uso BOOM
    }
  }

  // ==================
  delete(id) {
    // Tiene mas logica a nivel de servicios. en router hay qie cambiar igual . que mas escructurado

    // ahora a ver los erroes con boom.
    // 1. Caso 1 ot found
    // 2. caso 2 forbidden.
    // 3. ok = > si se elimina.

    const index = this.shoes.findIndex((shoe) => shoe.id === parseInt(id));
    if (index !== -1) {
      if (!this.shoes[index].isDeleted) {
        // throw new Error("Shoe is imposible th delete") EN LUGAR DE ESTE USAR BOOm
        throw boom.forbidden("Shoe is imposible  delete"); //! uso BOOM
      }
      this.shoes.splice(index, 1);
    } else {
      // throw new Error("iD no  se encontro"); lo quito y opngo BOOM
      throw boom.notFound("iD no  se encontro"); //! uso BOOM se poodria usar conflict. o n errores.
    }
    return id;
    // ==================
  }
  editPartial(id, body) {
    const index = this.shoes.findIndex((shoe) => shoe.id === parseInt(id)); //
    let message = "";
    if (index !== -1) {
      const shoeCopy = this.shoes[index]; // por que!!!!
      this.shoes[index] = { ...shoeCopy, ...body }; // esto es para actualizar el objeto.
      message = " edited Ok";
    } else {
      message = "error";
    }
    return message;
  }

  editFull(id, body) {
    const index = this.shoes.findIndex((shoe) => shoe.id === parseInt(id)); //
    let message = "";
    if (index !== -1) {
      const shoeCopy = this.shoes[index]; // por que!!!!
      this.shoes[index] = { ...shoeCopy, ...body }; // esto es para actualizar el objeto.
      message = " edited Ok";
    } else {
      message = "error no se encontro";
    }
    return message;
  }
}

module.exports = ShoesService;
