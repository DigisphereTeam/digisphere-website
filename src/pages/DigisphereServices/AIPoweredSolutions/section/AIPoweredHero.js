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
import AIAssistant from "../../../../assets/AI-Powered/AIAssistant.svg";
import botavatar from "../../../../assets/AI-Powered/botavatar.svg";
import arrow from "../../../../assets/AI-Powered/arrow.svg";
const AIPoweredHero = () => {
  const [userLoading, setUserLoading] = useState(false);
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
  const layers = [
    { label: "Input", count: 3 },
    { label: "Hidden", count: 5 },
    { label: "Hidden", count: 4 },
    { label: "Output", count: 2 },
  ];
  const conversation = [
    { sender: "bot", text: "👋 Hello! How can I help you today?" },
    { sender: "user", text: "I need a React website." },
    { sender: "bot", text: "Sure! I can build modern React applications." },
    { sender: "user", text: "Can you add AI features?" },
    { sender: "bot", text: "Absolutely! I can integrate OpenAI APIs." },
    { sender: "user", text: "That's great!" },
  ];
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // ADD THESE TWO
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const bottomRef = useRef(null);
  useEffect(() => {
    let typingTimer;
    let typingEffect;

    if (currentIndex >= conversation.length) {
      typingTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 500);

      return () => clearTimeout(typingTimer);
    }

    const message = conversation[currentIndex];

    setTyping(true);

    typingTimer = setTimeout(() => {
      setTyping(false);

      let text = "";
      let charIndex = 0;

      typingEffect = setInterval(() => {
        text += message.text[charIndex];

        setDisplayText(text);

        charIndex++;

        if (charIndex >= message.text.length) {
          clearInterval(typingEffect);

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              sender: message.sender,
              text: text,
            },
          ]);

          setDisplayText("");

          setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
          }, 500);
        }
      }, 0);
    }, 500);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(typingEffect);
    };
  }, [currentIndex]);

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
    }, 500);
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
          <div className="row mt-4">
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
                {/* Header Section */}
                <div className="chat-header">
                  <div className="header-left">
                    <div className="avatar">
                      <img
                        className="avatar-ai"
                        src={AIAssistant}
                        alt="AIAssistant"
                      />
                    </div>
                    <div>
                      <h3>Digisphere AI Assistant</h3>
                      <span className="online">
                        <FaCircle /> Online • GPT-4
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Chat Stream Container */}
                <div className="chat-body">
                  <div className="chat-scroll">
                    {/* 1. Loop over actual text rows */}
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`message-row ${msg.sender === "user" ? "user" : "bot"}`}
                      >
                        {msg.sender === "bot" && (
                          <div className="bot-avatar">
                            <img
                              className="bot"
                              src={botavatar}
                              alt="botavatar"
                            />
                          </div>
                        )}
                        <div
                          className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}

                    {/* 2. Bot Typing Indicator (Left Side) */}
                    {typing && (
                      <div className="message-row bot fallback-row-reset">
                        <div className="bot-avatar">
                          <FaRobot />
                        </div>
                        <div className="typing-box">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    )}

                    {/* 3. User Loading Indicator (Right Side) */}
                    {userLoading && (
                      <div className="message-row user fallback-row-reset">
                        <div className="typing-box user-loading">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    )}

                    {/* Scroll anchor element */}
                    <div ref={bottomRef} style={{ clear: "both" }}></div>
                  </div>
                </div>

                {/* Sticky Input Control Bar */}
                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                  />
                  <button onClick={sendMessage}>
                    <img className="arrow" src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
              <div className=" mt-3">
                <div className="network-card ">
                  <small className="Neural-network text-uppercase text-secondary fw-light">
                    Neural Network ·Processing
                  </small>

                  <div className="d-flex justify-content-around align-items-end ">
                    {layers.map((layer, layerIndex) => (
                      <div key={layerIndex} className="text-center">
                        <div className="layer">
                          {[...Array(layer.count)].map((_, nodeIndex) => (
                            <div
                              key={nodeIndex}
                              className="node"
                              style={{
                                animationDelay: `${
                                  (layer.count - nodeIndex) * 0.25 +
                                  layerIndex * 0.5
                                }s`,
                              }}
                            ></div>
                          ))}
                        </div>

                        <small className="title-Processing mt-2 d-block">
                          {layer.label}
                        </small>
                      </div>
                    ))}
                  </div>
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
