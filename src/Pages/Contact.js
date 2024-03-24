import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action with the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // After handling the form data, you can reset the form fields and set the submitted state to true
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Contact Us
      </h1>
      {submitted ? (
        <p className="text-center text-lg">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="2"
              className="mt-1 p-2 border rounded-md w-full"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}

export default ContactForm;
