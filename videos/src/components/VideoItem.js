import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  //props.videos
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div clasName="content">
        <div className="header"> {video.snippet.title} </div>
      </div>
    </div>
  );
};

export default VideoItem;
