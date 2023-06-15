import { educationModel } from "../models/education.model.js";

// Controller function to create a new education entry
async function createEducation(req, res) {
  try {
    const { school, date, educationDescription } = req.body;

    // Create the education entry in the database
    const education = await educationModel.create({
      school,
      date,
      educationDescription,
    });

    res.status(201).json({ success: true, data: education });
  } catch (error) {
    console.error("Error creating education entry:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

// Controller function to get all education entries
async function getAllEducation(req, res) {
  try {
    // Retrieve all education entries from the database
    const educationEntries = await educationModel.findAll();

    res.json({ success: true, data: educationEntries });
  } catch (error) {
    console.error("Error retrieving education entries:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

// Controller function to delete a job experience entry by name
async function deleteEducationByName(req, res) {
  try {
    const { name } = req.params;

    // Find the job experience by name
    const education = await educationModel.findOne({ where: { school: name } });

    // If the education doesn't exist, return an error
    if (!education) {
      return res.status(404).json({ message: "School not found" });
    }

    // Delete the job experience
    await education.destroy();

    return res.json({ message: "School deleted successfully" });
  } catch (error) {
    console.error("Error deleting school:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

// Controller function to update a education entry
async function updateEducationByName(req, res) {
  try {
    const { name } = req.params;
    const { school, date, educationDescription } = req.body;

    // Find the job experience by name
    const education = await educationModel.findOne({ where: { school: name } });

    // If the job experience doesn't exist, return an error
    if (!education) {
      return res.status(404).json({ message: "Job experience not found" });
    }

    // Update the job experience with the new data
    await education.update({ school, date, educationDescription });

    // Return the updated job experience entry
    return res.json({ education });
  } catch (error) {
    console.error("Error updating job experience:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export { createEducation, getAllEducation , deleteEducationByName , updateEducationByName };
