import React, { useEffect } from "react";
import ubisoft_intro from "./media/video/ubisoft_intro.mp4"

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
    <video 
      id="introVideo" 
      style={{ width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: 1000 }} 
      controls={false} 
      playsInline
      autoPlay
      muted
    >
      <source src={ubisoft_intro} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default FullScreenVideo;

