// components/ContactUs.jsx
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // react-icons

export default function ContactUs({ id }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:8000/send-email", formData);
      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 flex flex-col"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <header className="flex justify-center px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="text-primary text-3xl">{/* header icon */}</div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Fill out the form below and we will get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative rounded-2xl bg-background-light dark:bg-background-dark p-8 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              {["name", "email", "phone", "subject"].map((field) => (
                <div key={field} className="relative mb-6">
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    id={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`block w-full rounded-xl border py-5 px-4 h-14 focus:outline-none ${
                      errors[field]
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
                    } bg-background-light dark:bg-background-dark text-gray-900 dark:text-white`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}

              <div className="relative mb-6">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full rounded-xl border py-5 px-4 min-h-[140px] focus:outline-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 dark:border-gray-700 focus:border-primary focus:ring-primary"
                  } bg-background-light dark:bg-background-dark text-gray-900 dark:text-white`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold btn-primary
               cursor-pointer disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </form>

          {/* Footer with Social Icons */}
          <footer className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Follow me on
            </p>
            <div className="flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-300">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </footer>
        </div>
      </main>
    </section>
  );
}
