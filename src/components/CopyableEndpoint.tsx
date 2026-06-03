// Reusable copy-to-clipboard component for technical endpoints (Full Width Variant)
"use client";

import { useState } from "react";

interface CopyableEndpointProps {
  endpoint: string;
  className?: string;
}

export default function CopyableEndpoint({ 
  endpoint, 
  className = "" 
}: CopyableEndpointProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(endpoint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  return (
    <button
      type="button"
      className={`flex items-center justify-between text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-transparent hover:border-purple-500/30 px-3 py-2 rounded text-xs font-mono w-full cursor-pointer transition-all duration-200 group ${className}`}
      onClick={handleCopy}
      aria-label={`Copy endpoint ${endpoint}`}
      title="Click to copy to clipboard"
    >
      <span className="truncate">{endpoint}</span>
      <span className={`text-[11px] font-sans font-medium flex-shrink-0 ml-2 transition-colors duration-200 ${copied ? 'text-green-400' : 'text-gray-500 group-hover:text-purple-300'}`}>
        {copied ? "Copied ✓" : "Copy"}
      </span>
    </button>
  );
}
