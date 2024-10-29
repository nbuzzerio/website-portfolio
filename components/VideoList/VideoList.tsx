import React, { useRef } from "react";
import VideoComponent from "../VideoComponent";

const VideoList: React.FC = () => {
  const currentVideo = useRef<HTMLVideoElement | null>(null);

  const handlePlay = (video: HTMLVideoElement) => {
    if (currentVideo.current && currentVideo.current !== video) {
      currentVideo.current.pause();
    }
    currentVideo.current = video;
  };

  return (
    <div className="flex w-full flex-wrap gap-3">
      <VideoComponent src="fp1" onPlay={handlePlay} />
      <VideoComponent src="fp2" onPlay={handlePlay} />
      <VideoComponent src="fp3" onPlay={handlePlay} />
      <VideoComponent src="fp4" onPlay={handlePlay} />
      <VideoComponent src="fp5" onPlay={handlePlay} />
      <VideoComponent src="fp_cave" onPlay={handlePlay} />
      <VideoComponent src="fp_house" onPlay={handlePlay} />
      <VideoComponent src="fp_room" onPlay={handlePlay} />
      <VideoComponent src="fp_xmas" onPlay={handlePlay} />
    </div>
  );
};

export default VideoList;
