export function Partners() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6 glow-text">Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {[
          { name: 'Visa', logo: 'https://cdn.simpleicons.org/visa/ffffff' },
          { name: 'Mastercard', logo: 'https://cdn.simpleicons.org/mastercard/ffffff' },
          { name: 'Solana', logo: 'https://cdn.simpleicons.org/solana/ffffff' },
          { name: 'PayPal', logo: 'https://cdn.simpleicons.org/paypal/ffffff' },
          { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/ffffff' },
          { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/ffffff' },
          { name: 'Polygon', logo: 'https://cdn.simpleicons.org/polygon/ffffff' },
          { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/ffffff' },
          { name: 'Google', logo: 'https://cdn.simpleicons.org/google/ffffff' },
          { name: 'Steam', logo: 'https://cdn.simpleicons.org/steam/ffffff' },
          { name: 'PlayStation', logo: 'https://cdn.simpleicons.org/playstation/ffffff' },
          { name: 'Binance', logo: 'https://cdn.simpleicons.org/binance/ffffff' },
          { name: 'Epic Games', logo: 'https://cdn.simpleicons.org/epicgames/ffffff' },
          { name: 'Unity', logo: 'https://cdn.simpleicons.org/unity/ffffff' },
          { name: 'Unreal', logo: 'https://cdn.simpleicons.org/unrealengine/ffffff' },
        ].map((p, idx) => (
          <div key={idx} className="h-16 rounded-md border border-white/10 bg-black/30 flex items-center justify-center hover:shadow-neon transition-all">
            <img src={p.logo} alt={p.name} title={p.name} className="h-6 opacity-80 hover:opacity-100 transition-opacity" loading="lazy" onError={(e) => {
              const el = e.currentTarget as HTMLImageElement
              el.src = 'https://cdn.simpleicons.org/link/ffffff'
            }} />
          </div>
        ))}
      </div>
    </section>
  )
}


