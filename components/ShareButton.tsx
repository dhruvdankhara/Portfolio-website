"use client";

import { Share2 } from "lucide-react";
import React from "react";

interface ShareButtonProps {
  title: string;
  excerpt: string;
}

const ShareButton = ({ title, excerpt }: ShareButtonProps) => {
  return (
    <div>
      <button
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: title,
              text: excerpt,
              url: window.location.href,
            });
          } else {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
          }
        }}
        className="pop-btn-primary w-full py-3 text-sm inline-flex items-center justify-center gap-2"
      >
        <Share2 className="h-4 w-4" strokeWidth={2.5} />
        Share Article
      </button>
    </div>
  );
};

export default ShareButton;
