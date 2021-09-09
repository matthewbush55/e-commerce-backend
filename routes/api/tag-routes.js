const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const dataByTagID = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!dataByTagID) {
      res.status(404).json({ message: `No tag found with the id ${req.params.id}` });
    }

    res.status(200).json(tagDataByID);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json({ message: "Tag created" });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updatedTagData[0]) {
      res.status(404).json({
        message: `No tag found with the id ${req.params.id} or the update does not contain a change.`,
      });
    }

    res.status(200).json({
      message: `Tag with id ${req.params.id} updated.`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value

  try {
    const deletedTagData = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!deletedTagData) {
      res.status(404).json({
        message: `No tag found with the id ${req.params.id}.`,
      });
    }

    res.status(200).json({
      message: `Tag with id ${req.params.id} deleted.`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
