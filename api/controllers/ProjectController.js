module.exports = {

  create: async function (req, res) {
    const projectDetails = req.body;

    try {
      await Project.create(projectDetails);

      return res.json({
        meta: {
          model: 'Project',
          action: 'create'
        }
      });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  update: async function (req, res) {
    const projectDetails = req.body;

    try {
      await Project.updateOne({id: projectDetails.id}).set(projectDetails);

      return res.json({
        meta: {
          model: 'Project',
          action: 'update'
        }
      });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  find: async function (req, res) {
    try {
      const projects = await Project.find();

      return res.json({
        data: projects,
        meta: {
          model: 'Project',
          action: 'find'
        }
      });
    } catch (err) {
      return res.badRequest(err);
    }
  },

  destroy: async function (req, res) {
    try {
      const project = await Project.destroy({ id: req.params.id }).fetch();
      return res.json({
        data: project,
        meta: {
          model: 'Project',
          action: 'destroy'
        }
      });
    } catch (err) {
      return res.badRequest(err);
    }
  }
};
