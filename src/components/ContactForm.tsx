import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log("Sending form data to EmailJS:", formData);

    emailjs
      .send(
        "service_g1ix1qc",      // ✅ Your service ID
        "template_mbk063o",     // ✅ Your template ID
        formData,               // ✅ Must match template variables
        "VRLLRI7eHFBr0fVJB"     // ✅ Your public key
      )
      .then((response) => {
        console.log("EmailJS success response:", response);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="border border-gray-800 p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide uppercase font-sans">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-transparent border border-gray-700 focus:border-white focus:outline-none text-white placeholder-gray-500 font-sans transition-colors"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide uppercase font-sans">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-transparent border border-gray-700 focus:border-white focus:outline-none text-white placeholder-gray-500 font-sans transition-colors"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3 tracking-wide uppercase font-sans">Message</label>
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-4 bg-transparent border border-gray-700 focus:border-white focus:outline-none text-white placeholder-gray-500 font-sans resize-none transition-colors"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium tracking-wide uppercase font-sans"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
