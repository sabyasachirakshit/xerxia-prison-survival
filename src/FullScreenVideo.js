import React, { useEffect } from "react";
import ubisoft_intro from "./media/video/ubisoft_intro.mp4";

const FullScreenVideo = ({ onVideoEnd }) => {
  useEffect(() => {
    const video = document.getElementById("introVideo");
    video.play();

    video.onended = () => {
      onVideoEnd();
    };

    // Autoplay and play inline for mobile
    video.setAttribute("playsinline", "true");
    video.setAttribute("autoplay", "true");
    video.setAttribute("muted", "false"); // Autoplay generally requires the video to be muted on mobile

    // Request fullscreen if possible
    const requestFullscreen = () => {
      if (video.requestFullscreen) {
        video.requestFullscreen().catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
    };

    // Add an event listener for user interaction to trigger fullscreen
    const handleUserInteraction = () => {
      requestFullscreen();
      video.removeEventListener("click", handleUserInteraction);
      video.removeEventListener("touchstart", handleUserInteraction);
    };

    video.addEventListener("click", handleUserInteraction);
    video.addEventListener("touchstart", handleUserInteraction);

  }, [onVideoEnd]);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1000 }}>
      <video 
        id="introVideo" 
        style={{ width: "100%", height: "100%" }} 
        controls={false} 
        playsInline
        autoPlay
        muted
      >
        <source src={ubisoft_intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div 
        style={{ 
          position: "absolute", 
          top: "55%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          color: "aqua", 
          fontSize: "24px", 
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" 
        }}
      >
        <h1>Sabyasachi</h1>
      </div>
    </div>
  );
};

export default FullScreenVideo;
