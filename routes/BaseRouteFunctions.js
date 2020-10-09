module.exports = class BaseRouteFunctions {
  static getAll = async (req, res, service) => {
    const data = await service.getAll();
    res.json(data);
  }

  static getById = async (req, res, service) => {
    const id = req.params.id;
    const data = await service.getById(id);
    if(!data) {
      res.sendStatus(404);
    }
    res.json(data);
  }

  static update = async (req, res, service) => {
    const id = req.params.id;
    const updates = req.body;
    service.update(id, updates);
    res.sendStatus(204);
  }

  static delete = async (req, res, service) => {
    const id = req.params.id;
    service.delete(id);
    res.sendStatus(204);
  }

  static create = async (req, res, service) => {
    const object = req.body;
    const newObject = await service.create(object);
    res.status(201).json(newObject);
  }
}