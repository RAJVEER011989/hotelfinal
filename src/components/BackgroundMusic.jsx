import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // real state
  const [hasStartedOnce, setHasStartedOnce] = useState(false);

  const startAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;

    try {
      await audio.play();
      setIsPlaying(true);
      setHasStartedOnce(true);
    } catch {
      // autoplay may still be blocked, ignore
    }
  };

  useEffect(() => {
    // Try immediately (works only if browser allows)
    startAudio();

    // If blocked, start on first interaction ANYWHERE
    const onFirstInteraction = () => {
      if (!hasStartedOnce) startAudio();
    };

    window.addEventListener("click", onFirstInteraction, { passive: true });
    window.addEventListener("touchstart", onFirstInteraction, { passive: true });
    window.addEventListener("keydown", onFirstInteraction);
    window.addEventListener("scroll", onFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStartedOnce]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    await startAudio();
  };

  return (
    <>
      <audio ref={audioRef} src="/music/urban-atmosphere-corporate-ambient.mp3" loop preload="auto" />
      <button onClick={toggleMusic} className="musicBtn" aria-label="Toggle music">
        {isPlaying ? <VolumeIcon /> : <MuteIcon />}
      </button>
    </>
  );
}

function VolumeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 9v6h4l5 4V5L9 9H5z" fill="currentColor" />
      <path
        d="M16 8c1.5 1.5 1.5 6.5 0 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M5 9v6h4l5 4V5L9 9H5z" fill="currentColor" />
      <path
        d="M16 8l4 8M20 8l-4 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}