module.exports = class BaseControllerFunctions {
  static getAll = async (req, res, next, service) => {
    try {
      const data = await service.getAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  };

  static getById = async (req, res, next, service) => {
    try {
      const id = req.params.id;
      const data = await service.getById(id);
      if (!data) {
        res.sendStatus(404);
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  };

  static update = async (req, res, next, service) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      service.update(id, updates);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  };

  static delete = async (req, res, next, service) => {
    try {
      const id = req.params.id;
      service.delete(id);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  };

  static create = async (req, res, next, service) => {
    try {
      const object = req.body;
      const newObject = await service.create(object);
      res.status(201).json(newObject);
    } catch (e) {
      next(e);
    }
  };
};
