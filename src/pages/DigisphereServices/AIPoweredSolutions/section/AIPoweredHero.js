import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaPaperPlane, FaCircle } from "react-icons/fa";
import "./AIPoweredHero.css";
import Counter from "../../../../components/Counter/Counter";
import Reveal from "../../../../animations/Reveal";
import { fadeUp } from "../../../../animations/variants";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import aiIcon from "../../../../assets/AI-Powered/aiIcon.svg";
import DigisphereAI from "../../../../assets/AI-Powered/DigisphereAI.svg";
import NeuralNetwork from "../../../../assets/AI-Powered/NeuralNetwork.svg";

const AIPoweredHero = () => {
  const stats = [
    {
      end: 35,
      suffix: "+",
      label: "AI integrations deployed",
    },
    {
      end: 72,
      suffix: "%",
      label: "Automations deployed across clients",
    },
    {
      end: 3.8,
      suffix: "x",
      label: "Average ROAS on paid campaigns",
    },
    {
      end: 24,
      suffix: "/7",
      label: "Client satisfaction across projects",
    },
  ];
  const autoMessages = [
    "👋 Hello! How can I help you today?",
    "I can help you build websites.",
    "I can create React apps.",
    "I can design UI animations.",
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hello! How can I help you today?",
    },
    {
      id: 2,
      sender: "bot",
      text: "I can create AI powered websites.",
    },
    {
      id: 3,
      sender: "bot",
      text: "I can build React applications.",
    },
    {
      id: 4,
      sender: "bot",
      text: "I can automate your business workflow.",
    },
    {
      id: 5,
      sender: "bot",
      text: "Let's create something amazing.",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    const chatBox = document.querySelector(".chat-body");

    const scroll = setInterval(() => {
      if (chatBox) {
        chatBox.scrollTop += 1;

        // Reset when reaching bottom (loop)
        if (chatBox.scrollTop + chatBox.clientHeight >= chatBox.scrollHeight) {
          chatBox.scrollTop = 0;
        }
      }
    }, 30);

    return () => clearInterval(scroll);
  }, []);
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "This is a demo response. You can connect this UI with OpenAI API.",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1800);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <section className="devops-hero-section">
        <div className="hero-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <Reveal variant={fadeUp} delay={0.1}>
                <div className="devops-hero-content">
                  <p className="devops-badge">
                    <img src={aiIcon} alt="AI-image " />
                    AI-Powered Solutions
                  </p>

                  <h1 className="devops-title">
                    Practical AI that
                    <br />
                    <span>earns its keep.</span>
                  </h1>

                  <p className="devops-description">
                    We build AI integrations, copilots, and intelligent systems
                    that solve real business problems — not AI for the sake of
                    AI.
                  </p>

                  <div className="hero-buttons">
                    <Button variant="primary" icon={<FaArrowRight />}>
                      <span>Explore AI for Your Business</span>
                    </Button>

                    <Button variant="secondary">
                      <span>See Our Solutions</span>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="col-lg-6 col-12">
              <div className="chat-wrapper">
                {/* Header */}

                <div className="chat-header">
                  <div className="header-left">
                    <div className="avatar">
                      <FaRobot />
                    </div>

                    <div>
                      <h3>AI Assistant</h3>

                      <span className="online">
                        <FaCircle />
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* Chat Body */}

                <div className="chat-body">
                  <div className="chat-scroll">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`message-row ${
                          msg.sender === "user" ? "user" : "bot"
                        }`}
                      >
                        {msg.sender === "bot" && (
                          <div className="bot-avatar">
                            <FaRobot />
                          </div>
                        )}

                        <div
                          className={`message ${
                            msg.sender === "user"
                              ? "user-message"
                              : "bot-message"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Input */}

                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                  />

                  <button onClick={sendMessage}>
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="devops-hero-section">
        <div
          className="container-fluid mt-5 px-5"
          style={{ backgroundColor: "#0F172A" }}
        >
          <div className="row g-4">
            {stats.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <Reveal variant={fadeUp} delay={index * 0.1}>
                  <div className="marketing-stat-card">
                    <h3 className="marketing-stat-number">
                      <Counter
                        end={item.end}
                        prefix={item.prefix || ""}
                        suffix={item.suffix || ""}
                      />
                    </h3>

                    <p className="marketing-stat-label">{item.label}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AIPoweredHero;
