import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "urrth_music_enabled";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const syncStateFromAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setIsPlaying(!audio.paused && !audio.ended);
  };

  const tryPlay = async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    try {
      await audio.play();
      syncStateFromAudio();
      return true;
    } catch {
      syncStateFromAudio();
      return false;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    audio.preload = "auto";
    audio.playsInline = true;

    const savedPreference = localStorage.getItem(STORAGE_KEY);

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    const onCanPlay = () => setIsReady(true);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("canplay", onCanPlay);

    syncStateFromAudio();

    // only auto-attempt if user had previously enabled music
    if (savedPreference === "true") {
      tryPlay();
    }

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  useEffect(() => {
    const onFirstInteraction = async () => {
      const savedPreference = localStorage.getItem(STORAGE_KEY);
      const audio = audioRef.current;
      if (!audio) return;

      if (savedPreference === "true" && audio.paused) {
        await tryPlay();
      }

      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };

    window.addEventListener("click", onFirstInteraction, { passive: true });
    window.addEventListener("touchstart", onFirstInteraction, { passive: true });
    window.addEventListener("keydown", onFirstInteraction);

    return () => {
      window.removeEventListener("click", onFirstInteraction);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      localStorage.setItem(STORAGE_KEY, "false");
      setIsPlaying(false);
      return;
    }

    const played = await tryPlay();
    localStorage.setItem(STORAGE_KEY, played ? "true" : "false");
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/urban-atmosphere-corporate-ambient.mp3"
        loop
        preload="auto"
        playsInline
      />
      <button
        type="button"
        onClick={toggleMusic}
        className="musicBtn"
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <VolumeIcon /> : <MuteIcon />}
      </button>
    </>
  );
}

function VolumeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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