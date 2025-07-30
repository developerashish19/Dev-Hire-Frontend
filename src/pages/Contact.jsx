import React, { useState } from "react";
import Spinner from "../components/common/Spinner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      alert("Your message has been sent!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded p-6 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">
          Contact Us
        </h1>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-1"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <label className="block mt-4 mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-1"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <label className="block mt-4 mb-2 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-1"
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        {loading ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Send Message
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
