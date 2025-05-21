import React, { useState, useEffect } from "react";

function LaunchingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    // Trigger loading animation after component mounts
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleLaunch = () => {
    setIsLaunching(true);
    // Optional: Add delay before actual navigation
    setTimeout(() => {
      window.location.href = "https://abha-web.vercel.app";
    }, 1500);
  };

  return (
    <div className={`launch-container ${isLoaded ? "loaded" : ""}`}>
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className={`content ${isLaunching ? "launching" : ""}`}>
        <h1 className="title">
          <span className="letter">A</span>
          <span className="letter">B</span>
          <span className="letter">H</span>
          <span className="letter">A</span>
          <span className="separator"> </span>
          <span className="letter">O</span>
          <span className="letter">f</span>
          <span className="letter">f</span>
          <span className="letter">i</span>
          <span className="letter">c</span>
          <span className="letter">i</span>
          <span className="letter">a</span>
          <span className="letter">l</span>
          <span className="separator"> </span>
          <span className="letter">W</span>
          <span className="letter">e</span>
          <span className="letter">b</span>
        </h1>

        <p className="subtitle">Launching Ceremony</p>

        <div className="logo-container">
          <div className="logo-ring outer-ring"></div>
          <div className="logo-ring middle-ring"></div>
          <div className="logo-ring inner-ring"></div>
          <img src="/image/2.png" alt="ABHA Logo" className="logo-image" />
        </div>

        <div className="launch-section">
          <p className="by-line">Presented by ABHA Union</p>
          <button
            className="launch-button"
            onClick={handleLaunch}
            disabled={isLaunching}
          >
            {isLaunching ? (
              <span className="launching-text">Launching...</span>
            ) : (
              <span>Launch Now</span>
            )}
            <span className="button-overlay"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaunchingPage;
