import React, { useState, useEffect } from "react";
import "./FigmaWorkspaceSimulator.css";

// Import your canvas center asset images here
import typographyImg from "../../../../assets/typography-scale.svg";
import colorsImg from "../../../../assets/colors-center.svg"; 
import componentsImg from "../../../../assets/components-center.svg";
import spacingImg from "../../../../assets/spacing-center.svg";

const FigmaWorkspaceSimulator = () => {
  const [activeLayer, setActiveLayer] = useState("Colours");

  // Layer configuration array
  const layersData = [
    { id: "Typography", dotColor: "#3b82f6", bg: "#e0f2fe", color: "#3b82f6", image: typographyImg },
    { id: "Colours", dotColor: "#8b5cf6", bg: "#f3e8ff", color: "#8b5cf6", image: colorsImg },
    { id: "Components", dotColor: "#10b981", bg: "#d1fae5", color: "#10b981", image: componentsImg },
    { id: "Spacing", dotColor: "#f59e0b", bg: "#fef3c7", color: "#f59e0b", image: spacingImg }
  ];

  // AUTOMATIC LOOP LOGIC
  useEffect(() => {
    // Switches to the next layer every 3000ms (3 seconds)
    const interval = setInterval(() => {
      setActiveLayer((currentId) => {
        const currentIndex = layersData.findIndex((layer) => layer.id === currentId);
        // Calculate next index loop safely back to 0 using modulo
        const nextIndex = (currentIndex + 1) % layersData.length;
        return layersData[nextIndex].id;
      });
    }, 1500);

    // Cleans up interval when user changes page/unmounts component to prevent memory leaks
    return () => clearInterval(interval);
  }, [layersData.length]);

  const currentCenterImage = layersData.find(l => l.id === activeLayer)?.image || colorsImg;

  return (
    <div className="figma-window">
      {/* 1. FIGMA TOP BAR */}
      <div className="figma-top-bar">
        <div className="figma-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="figma-tools">
          <span>Move</span>
          <span className="tool-active">Frame</span>
          <span>Pen</span>
          <span>Text</span>
          <span>Shape</span>
        </div>
        <div className="figma-share">Share</div>
      </div>

      <div className="figma-workspace-layout">
        {/* 2. LEFT SIDEBAR: LAYERS */}
        <div className="figma-sidebar left">
          <div className="sidebar-section-title">LAYERS</div>
          <div className="layers-list">
            {layersData.map((layer) => {
              const isSelected = activeLayer === layer.id;
              return (
                <div
                  key={layer.id}
                  className={`layer-item ${isSelected ? "selected" : ""}`}
                  style={isSelected ? { backgroundColor: layer.bg, color: layer.color } : {}}
                  onClick={() => setActiveLayer(layer.id)} // Manual overrides still work!
                >
                  <span 
                    className="layer-indicator-dot" 
                    style={{ backgroundColor: layer.dotColor }}
                  />
                  {layer.id}
                </div>
              );
            })}
          </div>

          <div className="sidebar-section-title mt-4">ASSETS</div>
          <div className="assets-list">
            <div className="asset-item">Button/Primary</div>
            <div className="asset-item">Card</div>
            <div className="asset-item">Input</div>
            <div className="asset-item">Badge</div>
          </div>
        </div>

        {/* 3. DYNAMIC CENTER CANVAS */}
        <div className="figma-center-canvas">
          <div className="canvas-content-wrapper">
            <img 
              key={activeLayer} 
              src={currentCenterImage} 
              alt={`${activeLayer} Workspace Layout`} 
              className="canvas-render-image"
            />
          </div>
        </div>

        {/* 4. RIGHT SIDEBAR: DESIGN */}
        <div className="figma-sidebar right">
          <div className="sidebar-section-title">DESIGN</div>
          <div className="design-property">
            <label>Fill</label>
            <div className="color-preview-box"></div>
          </div>
          <div className="design-property mt-3">
            <label>Font</label>
            <div className="font-spec">
              <strong>Outfit</strong>
              <div>Bold - 32</div>
            </div>
          </div>
          <div className="sidebar-section-title mt-4">Palette</div>
          <div className="palette-grid">
            <span className="palette-dot color1"></span>
            <span className="palette-dot color2"></span>
            <span className="palette-dot color3"></span>
            <span className="palette-dot color4"></span>
            <span className="palette-dot color5"></span>
            <span className="palette-dot color6"></span>
            <span className="palette-dot color7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaWorkspaceSimulator;