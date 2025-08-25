import { useState } from 'react'
import { SpinningCard } from '@/modules/common/SpinningCard'

export function RegistrationPage() {
  const [tier, setTier] = useState<'Bronze' | 'Silver' | 'Diamond'>('Bronze')
  const [payment, setPayment] = useState<'TOKENS' | 'SOL'>('TOKENS')

  const TIER_INFO: Record<typeof tier, { price: number; taxPercent: number }> = {
    Bronze: { price: 20, taxPercent: 5 },
    Silver: { price: 200, taxPercent: 3 },
    Diamond: { price: 500, taxPercent: 1 },
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      wallet: data.get('wallet'),
      tier,
      payment,
      price: TIER_INFO[tier].price,
      taxPercent: TIER_INFO[tier].taxPercent,
    }
    console.log('Fake submit:', payload)
    alert(`Registered for ${tier}. Pay on Friday in ${payment}. We will notify you via email.`)
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold glow-text">Card Registration</h1>
      <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-neon-blue/40 bg-black/40 px-3 py-1 text-sm text-neon-blue">
        <span className="font-semibold">Register now, pay Friday</span>
        <span className="text-gray-400">• whitelist Friday; public in 2 weeks</span>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input name="email" type="email" required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Wallet Address</label>
            <input name="wallet" required className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-2">Payment Method</label>
            <div className="flex gap-3">
              {(['TOKENS', 'SOL'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPayment(p)}
                  className={`px-3 py-2 rounded-md border ${payment === p ? 'border-neon-blue text-neon-blue' : 'border-white/10 text-gray-300'} bg-black/30 hover:shadow-neon`}
                >
                  {p === 'TOKENS' ? 'Tokens' : 'SOL'}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-gray-400">You will complete payment on Friday.</p>
          </div>
          <button type="submit" className="px-5 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/10">Submit</button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">Choose Your Card</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(['Bronze', 'Silver', 'Diamond'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTier(t)}
                className={`p-4 rounded-lg border ${tier === t ? 'border-neon-blue text-neon-blue shadow-neon' : 'border-white/10 text-gray-300'} bg-black/30 text-left transition-shadow`}
              >
                <div className="h-24 rounded-md border border-white/10 mb-2 flex items-center justify-center overflow-hidden">
                  <SpinningCard
                    title={t}
                    variant={t.toLowerCase() as 'bronze' | 'silver' | 'diamond'}
                    spin={false}
                    glow={tier === t}
                    scale={0.6}
                  />
                </div>
                <div className="font-semibold">{t}</div>
                <div className="text-xs text-gray-400 mt-1">Price: ${TIER_INFO[t].price}</div>
                <div className="text-xs text-gray-400">Tax: {TIER_INFO[t].taxPercent}%</div>
              </button>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <SpinningCard
              title={`${tier} Tier`}
              variant={tier.toLowerCase() as 'bronze' | 'silver' | 'diamond'}
            />
          </div>
          <div className="p-4 rounded-lg border border-white/10 bg-black/20 text-sm text-gray-300">
            <div><span className="text-white font-medium">Selected:</span> {tier}</div>
            <div><span className="text-white font-medium">Price:</span> ${TIER_INFO[tier].price}</div>
            <div><span className="text-white font-medium">Tax:</span> {TIER_INFO[tier].taxPercent}%</div>
            <div><span className="text-white font-medium">Payment:</span> {payment === 'TOKENS' ? 'Tokens' : 'SOL'}</div>
            <div className="text-xs text-gray-400 mt-1">Register now — pay Friday. You will receive instructions by email.</div>
          </div>
        </div>
      </form>
    </div>
  )
}


