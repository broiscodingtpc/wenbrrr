export function FeaturesPage() {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold glow-text">Features</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h3 className="text-xl font-semibold">Anon Spending</h3>
          <p className="mt-2 text-gray-400">No KYC, privacy-first. Spend crypto like a debit card.</p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h3 className="text-xl font-semibold">Phantom Wallet</h3>
          <p className="mt-2 text-gray-400">Connect instantly to your Phantom wallet on Solana.</p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h3 className="text-xl font-semibold">Wide Acceptance</h3>
          <p className="mt-2 text-gray-400">Xbox, local shops, supermarkets, and partner merchants.</p>
        </div>
        <div className="p-6 rounded-xl border border-white/10 bg-black/30">
          <h3 className="text-xl font-semibold">Global Partnerships</h3>
          <p className="mt-2 text-gray-400">Expanding network for real-world utility and gaming integrations.</p>
        </div>
      </div>
    </div>
  )
}


