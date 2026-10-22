import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="page">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact <span>Me</span></h1>

      <div className="contact-card">
        <p>
          Have a project idea or an opportunity? Send me a message.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>

        <p className="form-note">
          This opens your email application; it does not send
          messages through a backend server.
        </p>
      </div>
    </section>
  );
}

export default Contact;