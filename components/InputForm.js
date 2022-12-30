import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <div className="create">
      <h2>Connect With Us 📞 </h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          required
          placeholder="Enter your full name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="912-423-678-1"
          size="10"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
