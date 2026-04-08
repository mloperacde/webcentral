import React, { useRef, useState, useEffect } from 'react';

export const VideoPlayer = ({ src, isActive, isPlaying, fallbackImage }: { src: string; isActive: boolean; isPlaying: boolean; fallbackImage: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!videoRef.current || hasError) return;
    
    if (isActive && isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented or video failed
          console.warn("Video play failed, showing fallback");
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isActive, isPlaying, hasError]);

  if (hasError) {
    return <img loading="lazy" src={fallbackImage} alt="Sector" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />;
  }

  return (
    <video 
      ref={videoRef}
      src={src} 
      loop 
      muted 
      playsInline 
      onError={() => setHasError(true)}
      className="w-full h-full object-cover opacity-80"
    />
  );
};
