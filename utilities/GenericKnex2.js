// se hace un refactor para mejorar el codigo y hacerlos mas corto.

const genericModelKnex = (knexInstance, tableName, columns, tableId) => {
  const CreateShoe = (bodyShoes) => {
    return knexInstance(tableName).insert(bodyShoes);
  };
  const getAllShoes = () => {
    return knexInstance(tableName).select("*");
  };

  const getShoeById = (id_shoe) => {
    return (
      knexInstance(tableName)
        // !	poner [] para seleccionar atributo valor. como con el punto
        .where({ [tableId]: id })
        .select("*")
    );
  };
  const uPDateById = (id_shoe, body) => {
    return knexInstance(tableName)
      .where({ [tableId]: id })
      .update(body);
  };
  const deleteById = (id_shoe) => {
    return knexInstance(tableName)
      .del()
      .where({ [tableId]: id });
  };
  // importrante  retornar un objeto con los metodos.
  return { CreateShoe, getAllShoes, getShoeById, uPDateById, deleteById };
};

module.exports = genericModelKnex;
