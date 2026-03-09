import { supabase } from "../config/supabase.js";

export const submitApplication = async (req, res) => {
  try {
    // 1. Destructure all fields exactly as they come from your React form
    const {
      full_name,
      age,
      email,
      phone_number,
      college_name,
      year_of_study,
      passout_year,
      degree_type,
      field_of_degree,
      employment_type,
      domain,
      portfolio_link
    } = req.body;

    const file = req.file;

    // 2. Validate the file upload
    if (!file) {
      return res.status(400).json({ error: "Resume file is required." });
    }

    // Clean up the file name to avoid spacing issues in the URL
    const fileName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;

    // 3. Upload resume to the "resumes" bucket in Supabase Storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from("resumes")
      .upload(fileName, file.buffer, {
        contentType: file.mimetype
      });

    if (storageError) throw storageError;

    // 4. Generate the public URL for the resume
    const resume_url = `${process.env.SUPABASE_URL}/storage/v1/object/public/resumes/${fileName}`;

    // 5. Insert all data into the "applications" PostgreSQL table
    const { error: dbError } = await supabase.from("applications").insert([
      {
        full_name,
        age: age ? parseInt(age, 10) : null,
        email,
        phone_number,
        college_name,
        year_of_study,
        passout_year: passout_year ? parseInt(passout_year, 10) : null,
        degree_type,
        field_of_degree,
        employment_type, // "Full-time" or "Internship"
        domain,          // e.g., "Backend Developer"
        portfolio_link,
        resume_url
      }
    ]);

    if (dbError) throw dbError;

    // 6. Send success response back to React
    res.status(200).json({ success: true, message: "Application submitted successfully!" });

  } catch (err) {
    console.error("Application Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};