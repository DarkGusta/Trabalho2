import { workExpModel } from "../models/workExp.model.js";

// Controller function to create a new work experience entry
async function createWorkExp(req, res) {
  try {
    const { job, date, jobDescription } = req.body;

    // Create a new work experience entry
    const workExp = await workExpModel.create({ job, date, jobDescription });

    res.status(201).json({ workExp });
  } catch (error) {
    console.error("Error creating work experience entry:", error);
    res.status(500).json({ error: "Unable to create work experience entry" });
  }
}

// Controller function to get all work experience entries
async function getAllWorkExp(req, res) {
  try {
    // Retrieve all work experience entries
    const workExpEntries = await workExpModel.findAll();

    res.status(200).json({ workExpEntries });
  } catch (error) {
    console.error("Error retrieving work experience entries:", error);
    res
      .status(500)
      .json({ error: "Unable to retrieve work experience entries" });
  }
}

// Controller function to delete a job experience entry by name
async function deleteWorkExpByName(req, res) {
  try {
    const { name } = req.params;

    // Find the job experience by name
    const workExp = await workExpModel.findOne({ where: { job: name } });

    // If the job experience doesn't exist, return an error
    if (!workExp) {
      return res.status(404).json({ message: "Job experience not found" });
    }

    // Delete the job experience
    await workExp.destroy();

    return res.json({ message: "Job experience deleted successfully" });
  } catch (error) {
    console.error("Error deleting job experience:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Controller function to update a job experience entry
async function updateWorkExpByName(req, res) {
  try {
    const { name } = req.params;
    const { job, date, jobDescription } = req.body;

    // Find the job experience by ID
    const workExp = await workExpModel.findOne({ where: { job: name } });

    // If the job experience doesn't exist, return an error
    if (!workExp) {
      return res.status(404).json({ message: "Job experience not found" });
    }

    // Update the job experience with the new data
    await workExp.update({ job, date, jobDescription });

    // Return the updated job experience entry
    return res.json({ workExp });
  } catch (error) {
    console.error("Error updating job experience:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export {
  createWorkExp,
  getAllWorkExp,
  deleteWorkExpByName,
  updateWorkExpByName,
};
