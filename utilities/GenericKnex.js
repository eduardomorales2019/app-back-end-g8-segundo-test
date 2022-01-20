// //! ================funcion de reingenieria, abstracciones. DRY(dont repeat yourself) KISS, keepitsimpleStupid ========================================

const genericKnex = (knexInstance, tableName, tableId) => {
  // =======================>>>>>>
  const CreateShoe = (bodyShoes) => {
    return knexInstance(tableName).insert(bodyShoes);
  };

  const getAllShoes = () => {
    return knexInstance(tableName).select("*");
  };

  const getShoeById = (id_shoe) => {
    return knexInstance(tableName)
      .where({ [tableId]: id_shoe }) // esto es un objeto para hacerlo dinamico  y que haga refrencia . con los corchetes
      .select(columns);
  };

  const uPDateById = (id_shoe, body) => {
    console.log(id_shoe, body);
    return knexInstance(tableId)
      .where({ [tableId]: id_shoe }) // refrencia dinamica con corchetes.
      .update(body);
  };

  const deleteById = (id_shoe) => {
    return knexInstance(tableName)
      .where({ [tableId]: id_shoe }) // refrencia dinamica con corchetes.
      .del();
  };
  // ponerle return para que no se ejecute hasta que se llame a la funcion
  return { CreateShoe, getAllShoes, getShoeById, uPDateById, deleteById };
};

module.exports = genericKnex;
