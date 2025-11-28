"use client";

import { VideoModal } from "./VideoModal";

interface TrailerModalProps {
  youtubeId: string;
  show: boolean;
  onClose: () => void;
}

export function TrailerModal({ 
  youtubeId,
  show,
  onClose
}: TrailerModalProps) {
  if (!show) return null;

  return <VideoModal youtubeId={youtubeId} onClose={onClose} />;
}

