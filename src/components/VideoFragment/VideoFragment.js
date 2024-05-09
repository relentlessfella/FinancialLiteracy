'use client';
import React from 'react';
import styles from './component.module.css';

const VideoFragment = ({ videoId }) => {
  return (
    <div>
      <iframe
        className={styles.frame}
        width="1000"
        height="615"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default VideoFragment;
