// Compact support block for footer. Client Component for clipboard interactivity.
// Updated: centered text on mobile, kept optional label muted for visual hierarchy
"use client";

import { useState } from "react";

interface Wallet {
  label: string;
  address: string;
}

export default function SupportBlock() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const wallets: Wallet[] = [
    { label: 'MINIMA (Native)', address: 'MxG081NYSWDGZMKSYCYBKW9TJRS3PCMFDV5NWKFKEQKQNPWBTYFYJ9CTVFU0BAR' },
    { label: 'USDT (TRC20)', address: 'TF5NBncPz9d8BoRqK8EfAHhTzsapLDujv4' },
  ];

  // Safe copy with visual feedback
  const handleCopy = async (wallet: Wallet) => {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopiedLabel(wallet.label);
      setTimeout(() => setCopiedLabel(null), 2000);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
    }
  };

  return (
    <div className="mt-6 pt-4 pb-4 sm:pb-0 border-t border-gray-700/50">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Left: Title & Description */}
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-sm font-medium text-gray-300">
            Support Minimaverse <span className="text-gray-500">(Optional)</span>
          </h4>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            Contributions help maintain the project and infrastructure.
          </p>
        </div>

        {/* Right: Buttons (centered on mobile, left-aligned on desktop) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:mt-0">
          {wallets.map((wallet) => (
            <button
              key={wallet.label}
              type="button"
              className="px-2.5 py-1 rounded border border-gray-600 hover:border-purple-400 hover:text-purple-300 transition-all duration-200 text-[10px] font-mono bg-transparent min-w-[90px] text-center"
              onClick={() => handleCopy(wallet)}
              aria-label={`Copy ${wallet.label} address`}
            >
              {copiedLabel === wallet.label ? "Copied ✓" : wallet.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
