import React, { useState } from "react";
import Header from "./Header";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function sendEmail() {
    const body = { email, name, message };
    const res = await fetch("http://127.0.0.1:8000/api/mail", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div>
      <div className="bg_design ">
        <Header />
      </div>
      <div className="flex">
        <div className="bg-white flex flex-col py-16 px-24 mt-10 space-y-4 ">
          <div className="text-4xl uppercase font-bold">Contact</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
          <div>
            Interdum consectetur libero id faucibus nisl tincidunt eget nullam
            non. Quis vel eros donec ac odio. Adipiscing commodo elit at
            imperdiet dui accumsan sit amet nulla.
          </div>
        </div>
        <div className="bg-gray-100 w-[1000px] flex flex-col py-16 px-24 m-20 space-y-4 border-4 border-black rounded-xl">
          <h2 className="font-bold">Contact us</h2>

          <label for="name">Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <label for="email">Email Address :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label for="message">Message :</label>
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></input>
          <br />

          <button onClick={sendEmail}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
