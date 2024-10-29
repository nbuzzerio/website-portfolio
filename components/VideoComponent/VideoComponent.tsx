import React, { useRef } from "react";

interface VideoComponentProps {
  src: string;
  onPlay: (video: HTMLVideoElement) => void;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      onPlay(videoRef.current);
    }
  };

  return (
    <video
      ref={videoRef}
      className="w-[calc(33.333%-12px)]"
      src={`https://fireplace-videos-showcase.s3.us-east-1.amazonaws.com/${src}.mp4`}
      loop
      muted
      controls
      onPlay={handlePlay}
    />
  );
};

export default VideoComponent;
