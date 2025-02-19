// AIzaSyCcUykCqVzRZ3Xw0cW59bLbks9DnAbk3F8
import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPaperPlane } from "react-icons/fa";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    const newMessages = [...messages, { text: prompt, sender: "user" }];
    setMessages(newMessages);
    setPrompt("");

    try {
      const genAI = new GoogleGenerativeAI("your api key");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(prompt);
      const responseText = result?.response?.text() || "I couldn't understand that.";

      setMessages([...newMessages, { text: responseText, sender: "bot" }]);
    } catch (error) {
      setMessages([...newMessages, { text: "Error: " + error.message, sender: "bot" }]);
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-0" style={{ width: "400px", background: "#2C2F33", borderRadius: "15px" }}>
        <div className="card-header text-white text-center py-3" style={{ background: "#23272A", borderRadius: "15px 15px 0 0" }}>
          <h4 className="mb-0">AI ChatBot</h4>
        </div>
        <div
          className="card-body p-3 d-flex flex-column"
          style={{ height: "450px", overflowY: "auto" }}
          ref={chatContainerRef}
        >
          {messages.map((msg, index) => (
            <div key={index} className={`d-flex mb-3 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"}`}>
              <div
                className={`px-3 py-2 rounded text-white shadow-sm`}
                style={{
                  maxWidth: "75%",
                  background: msg.sender === "user" ? "#7289DA" : "#99AAB5",
                  borderRadius: msg.sender === "user" ? "15px 15px 0 15px" : "15px 15px 15px 0",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <div className="card-footer d-flex bg-dark p-3" style={{ borderRadius: "0 0 15px 15px" }}>
          <input
            type="text"
            className="form-control text-white bg-secondary border-0"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your message..."
            disabled={loading}
            style={{ borderRadius: "10px" }}
          />
          <button
            className="btn btn-primary ms-2 d-flex align-items-center justify-content-center"
            onClick={handleSend}
            disabled={loading}
            style={{ borderRadius: "10px", width: "50px", height: "40px" }}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              <FaPaperPlane />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

 
