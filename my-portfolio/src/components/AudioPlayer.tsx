import { useRef, useEffect } from 'react';

interface AudioPlayerProps {
  isPlaying: boolean;
}

const AudioPlayer = ({ isPlaying }:AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.loop = true;

      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log('Erro ao tentar reproduzir áudio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} src="/audios/Paranoid (Just Raw Instrumental).mp3" />
  );
};

export default AudioPlayer;
