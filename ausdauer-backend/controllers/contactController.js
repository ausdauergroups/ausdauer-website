import { supabase } from "../config/supabase.js";

export const submitContact = async (req, res) => {
  try {
    // 1. Destructure all fields from your React contact form
    const {
      full_name,
      email,
      phone_number,
      subject,
      message
    } = req.body;

    // 2. Insert data directly into the "contacts" table
    const { error } = await supabase.from("contacts").insert([
      {
        full_name,
        email,
        phone_number,
        subject,
        message
      }
    ]);

    if (error) throw error;

    // 3. Send success response
    res.status(200).json({ success: true, message: "Contact message sent successfully!" });

  } catch (err) {
    console.error("Contact Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};