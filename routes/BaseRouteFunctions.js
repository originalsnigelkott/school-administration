module.exports = class BaseRouteFunctions {
  static getAll = async (req, res, service) => {
    const data = await service.getAll();
    res.json(data);
  }

  static getById = async (req, res, service) => {
    const id = req.params.id;
    const data = await service.getById(id);
    res.json(data);
  }

  static update = async (req, res, service) => {
    const id = req.params.id;
    const updates = req.body;
    await service.update(id, updates);
    res.status(204)
  }

  static delete = async (req, res, service) => {
    const id = req.params.id;
    await service.delete(id);
    res.status(204)
  }
}