const Role = require("/Users/eduardomorales/Documents/DEVF SA DE CV /kata BackEnd/knexProject/models/role.js");

const create = async (req, res) => {
  try {
    const newRole = {
      name: req.body.name, //  ojo aqui que solo necesito el nombres
    };

    return Role.createRols(newRole)
      .then((data) => {
        console.log("result", data.rowCount);
        return res.status(201).json({
          message: "Role created succcessfully",
          result: data.rowCount,
        });
      })
      .catch((err) => {
        console.log("error", err);
        return res
          .status(400)
          .json({ message: "Role not inserted", error: err });
      });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Role not created successfully", error });
  }
};

const findAll = async (req, res) => {
  try {
    const data = await Role.getAllRols();
    console.log("data", data);
    res.json({ message: "Roles recover successfully", result: data });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error recover all rows", error });
  }
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Role.getByIDRols(id);
    res.json({ message: "Role recover successfully", result: data });
  } catch (error) {
    res.json({ message: "Error recover row", error });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowUpdated = await Role.uPDateByIdRols(id, req.body);
    res.json({ message: "Role updated", result: rowUpdated });
  } catch (error) {
    res.json({ message: "Error", error });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const rowDeleted = await Role.deleteByIdRols(id);
    res.status(204).json({ message: "Role deleted", result: rowDeleted });
  } catch (error) {
    res.json({ message: "Error in deleted row", error });
  }
};

module.exports = {
  create,
  findAll,
  findById,
  updateById,
  deleteById,
};
