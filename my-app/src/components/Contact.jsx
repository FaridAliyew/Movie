
function Contact() {

  return (
    <div className="contact-card-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>If you have any questions or suggestions, feel free to reach out to us!</p>

        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
