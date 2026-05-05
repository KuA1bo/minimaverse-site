// Compact support block for footer. Client Component for clipboard interactivity.
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
    <div className="mt-6 pt-4 border-t border-gray-700/50">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-400">
        <p className="flex-1 min-w-0">
          <span className="text-gray-300 font-medium">Support Minimaverse (Optional)</span>
          <span className="mx-1.5 text-gray-600 select-none">—</span>
          {/* Updated: accurately reflects domain costs & future maintenance */}
          <span>Voluntary contributions cover domain and project maintenance.</span>
        </p>
        
        <div className="flex flex-wrap items-center gap-2">
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
      <p className="mt-2 text-[10px] text-gray-500">
        * Non-refundable.
      </p>
    </div>
  );
}
