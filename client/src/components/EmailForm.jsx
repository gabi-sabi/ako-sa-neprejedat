import { useState } from "react";
//import axios from "axios";

export const EmailForm = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const callBackendAPI = async () => {
    try {
      const response = await fetch("/api/send");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const body = await response.json();
      console.log({ body });
      setData(body.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ to, subject, message });
    try {
      await axios.post("/api/send", {
        from: "my@email.com",
        to,
        subject,
        message,
      });
      alert("Email sent!");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        rows="3"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};
