'use client';

import { useEffect, useRef, useState } from 'react';
import { FiMusic, FiVolume2, FiVolumeX } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  audioUrl?: string;
  title?: string;
}

export default function MusicPlayer({ 
  audioUrl = '/music/bg music.mp3',
  title = 'Ambient Music'
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isClient, setIsClient] = useState(false);
  const [resolvedUrl, setResolvedUrl] = useState<string | null>(audioUrl);
  const [hasError, setHasError] = useState(false);
  const [lastCheckedStatus, setLastCheckedStatus] = useState<number | null>(null);
  const [lastCheckedUrl, setLastCheckedUrl] = useState<string | null>(null);
  const [lastErrorMessage, setLastErrorMessage] = useState<string | null>(null);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Autoplay once resolvedUrl is ready and audio element can play.
    if (!resolvedUrl || !audioRef.current || !isClient) return;

    const audio = audioRef.current;
    const tryAutoplay = async () => {
      try {
        // Attempt unmuted autoplay from the beginning.
        audio.muted = false;
        audio.volume = 0.5;
        setIsMuted(false);
        setVolume(0.5);
        
        const p = audio.play();
        if (p && typeof p.then === 'function') {
          await p;
        }
        setIsPlaying(true);
      } catch (err) {
        // ignore - autoplay blocked by browser
        console.log('Autoplay blocked or failed:', err);
      }
    };

    // Wait for canplay event or try immediately
    const onCanPlay = () => {
      tryAutoplay();
      audio.removeEventListener('canplay', onCanPlay);
    };

    // If already canplay, try immediately; otherwise wait for event
    if (audio.readyState >= 2) {
      tryAutoplay();
    } else {
      audio.addEventListener('canplay', onCanPlay, { once: true });
    }

    return () => {
      audio.removeEventListener('canplay', onCanPlay);
    };
  }, [resolvedUrl, isClient]);

  useEffect(() => {
    // Verify the configured audio URL exists on the server; if not, surface an error.
    const verify = async () => {
      try {
        const res = await fetch(encodeURI(audioUrl), { method: 'HEAD' });
        setLastCheckedStatus(res.status);
        setLastCheckedUrl(audioUrl);
        if (res.ok) {
          setResolvedUrl(audioUrl);
          setHasError(false);
        } else {
          // Try fallback: consult a simple manifest at /music/index.json
            try {
              const listRes = await fetch('/music/index.json');
              setLastCheckedStatus(listRes.status);
              setLastCheckedUrl('/music/index.json');
              if (listRes.ok) {
                const files: string[] = await listRes.json();
                const first = files.find((f) => /\.(mp3|ogg|wav)$/i.test(f));
                if (first) {
                  const candidate = `/music/${first}`;
                  setResolvedUrl(candidate);
                  setHasError(false);
                  return;
                }
              }
            } catch (e) {
              // ignore manifest errors
            }

          console.error('Audio file not found at', audioUrl);
          setResolvedUrl(null);
          setHasError(true);
        }
        } catch (err) {
          console.error('Error verifying audio file:', err);
          setLastErrorMessage(String(err));
          setResolvedUrl(null);
          setHasError(true);
        }
    };

    verify();
  }, [audioUrl]);

  useEffect(() => {
    // When the resolved URL changes, instruct the audio element to reload sources.
    if (audioRef.current) {
      try {
        audioRef.current.load();
      } catch (e) {
        // ignore load errors here; onError will handle unsupported sources
      }
    }
  }, [resolvedUrl]);

  useEffect(() => {
    // Update audio volume and muted state when state changes
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handlePlay = async () => {
    if (!audioRef.current) return;
    if (!resolvedUrl || hasError) {
      setHasError(true);
      return;
    }

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const handleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      // Unmute when user adjusts volume
      if (newVolume > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  if (!isClient) return null;

  return (
    <>
      <audio
        ref={audioRef}
        autoPlay
        playsInline
        preload="auto"
        loop
        crossOrigin="anonymous"
        onError={() => {
            const mediaErr = audioRef.current?.error;
            console.error('Audio NotSupportedError: The element has no supported sources.', mediaErr);
            const mediaMsg = mediaErr ? `MediaError code=${mediaErr.code}` : 'No media error info';
            setLastErrorMessage(mediaMsg);
            setLastCheckedUrl(resolvedUrl ?? audioUrl);
            setHasError(true);
            setIsPlaying(false);
        }}
      >
        {resolvedUrl && (
          <source src={encodeURI(resolvedUrl)} type="audio/mpeg" />
        )}
      </audio>
      {hasError && (
        <div className="fixed bottom-24 right-6 z-50 px-3 py-2 bg-red-50 border border-red-200 text-sm text-red-700 rounded max-w-xs">
          <div className="font-semibold">No supported audio source found.</div>
          <div className="text-xs mt-1">Put an MP3/OGG/WAV file in the public/music folder and set `audioUrl` to its path (e.g. /music/your-song.mp3).</div>
          {lastCheckedUrl && (
            <div className="text-xs mt-2">Last check: {lastCheckedUrl} (HTTP {lastCheckedStatus ?? '—'})</div>
          )}
          {lastErrorMessage && (
            <div className="text-xs mt-1 text-rose-700">Error: {lastErrorMessage}</div>
          )}
        </div>
      )}
      
      <motion.div
        className="fixed bottom-6 right-6 z-40 no-print"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.div
          className="bg-cream/95 backdrop-blur-md border border-dusty-rose/20 rounded-full p-4 shadow-lg flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Play/Pause Button */}
          <motion.button
            onClick={handlePlay}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-dusty-rose/10 hover:bg-dusty-rose/20 text-dusty-rose transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-dusty-rose animate-pulse"></div>
                <div className="w-0.5 h-3 bg-dusty-rose animate-pulse delay-100"></div>
              </div>
            ) : (
              <FiMusic className="w-5 h-5" />
            )}
          </motion.button>

          {/* Mute Button */}
          <motion.button
            onClick={handleMute}
            className="flex items-center justify-center w-8 h-8 text-sage-green hover:text-sage-green/80 transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <FiVolumeX className="w-4 h-4" />
            ) : (
              <FiVolume2 className="w-4 h-4" />
            )}
          </motion.button>

          {/* Volume Slider */}
          <div className="flex items-center gap-1 pl-1 border-l border-dusty-rose/10">
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-20 h-1 accent-dusty-rose rounded-full cursor-pointer appearance-none bg-dusty-rose/10"
              title="Volume"
            />
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute bottom-full mb-2 px-3 py-1 bg-dark text-cream text-xs rounded whitespace-nowrap pointer-events-none"
          >
            {title}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
