export function WhitepaperPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold glow-text">WEN BRRR Whitepaper</h1>
      <p className="mt-3 text-gray-300 max-w-3xl">WEN BRRR fuses meme culture with real-world utility. Built on Solana, we enable fast, private spending through debit-like crypto cards, with Phantom wallet integration and broad merchant reach.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 p-6 rounded-xl border border-white/10 bg-black/30">
          <h2 className="text-xl font-semibold text-white">1. Vision</h2>
          <p className="mt-2 text-gray-300">Bring anonymous spending to the mainstream: privacy-first payments, zero KYC, instant settlement, global usability.</p>

          <h2 className="mt-6 text-xl font-semibold text-white">2. Wallet Mission</h2>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li>Anon card experience: spend crypto like a debit card.</li>
            <li>Seamless Phantom integration on Solana.</li>
            <li>No KYC flow by design; user sovereignty and privacy.</li>
            <li>Utility across gaming, local shops, supermarkets, and partners.</li>
          </ul>

          <h2 className="mt-6 text-xl font-semibold text-white">3. Core Features</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { t: 'Anon Spending', d: 'Privacy-first, no KYC checkout.' },
              { t: 'Phantom Wallet', d: 'One-click connect on Solana.' },
              { t: 'Fast & Low Fees', d: 'Leveraging Solana performance.' },
              { t: 'Real-World Use', d: 'Xbox, local shops, supermarkets, partners.' },
            ].map((f) => (
              <div key={f.t} className="p-4 rounded-lg border border-white/10 bg-black/20">
                <div className="font-semibold text-white">{f.t}</div>
                <div className="text-gray-400 text-sm mt-1">{f.d}</div>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-xl font-semibold text-white">4. Roadmap</h2>
          <ol className="mt-2 space-y-2 text-gray-300">
            <li><span className="font-medium text-white">Phase 1:</span> Pre-Launch hype, social campaigns.</li>
            <li><span className="font-medium text-white">Phase 2:</span> Coin + Card whitelist release (Friday for holders).</li>
            <li><span className="font-medium text-white">Phase 3:</span> Expansion to public, partnerships, gaming integrations.</li>
          </ol>
        </section>

        <aside className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h3 className="text-lg font-semibold text-white">Token & Policy</h3>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li>Chain: Solana</li>
            <li>Ticker: WENBRRR</li>
            <li>Utility: Card spending fees, rewards, governance stubs</li>
            <li>CA: zFXihzaXTjqRr7WVnY82GJz7XZyPkKJxVXoi5F5pump</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-white">Official Links</h3>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            <li><a className="text-neon-blue hover:underline" href="https://t.me/WENBRR" target="_blank" rel="noreferrer">Telegram</a></li>
            <li><a className="text-neon-blue hover:underline" href="https://x.com/WEN_BRR" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
          <p className="mt-6 text-xs text-gray-500">Operator: WenBrrr Technologies FZ-LLC (fictional), Dubai, UAE.</p>
          <h3 className="mt-6 text-lg font-semibold text-white">Disclaimers</h3>
          <p className="mt-2 text-gray-400 text-sm">High risk. Do your own research. No guarantees. Comply with your local laws.</p>
        </aside>
      </div>
    </div>
  )
}


