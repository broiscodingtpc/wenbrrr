import { motion } from 'framer-motion'
import { Roadmap } from './Roadmap'
import { Partners } from './Partners'
import { Link } from 'react-router-dom'
import { SpinningCard } from '@/modules/common/SpinningCard'
import { ContractBadge } from '@/modules/common/ContractBadge'

export function LandingPage() {
  return (
    <div className="py-12">
      <section className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold glow-text"
        >
          The Future of Anon Spending
        </motion.h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          WEN BRRR is a Solana meme coin empowering anonymous, fast payments with debit-like crypto cards.
        </p>
        <div className="mt-6 flex justify-center">
          <ContractBadge address="zFXihzaXTjqRr7WVnY82GJz7XZyPkKJxVXoi5F5pump" size="lg" />
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/register" className="px-6 py-3 rounded-md bg-neon-blue/10 text-neon-blue border border-neon-blue hover:bg-neon-blue/20 transition-colors">
            Register for Card
          </Link>
          <Link to="/whitepaper" className="px-6 py-3 rounded-md border border-white/20 hover:bg-white/5">
            Read Whitepaper
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <SpinningCard fullEffects variant="diamond" spin={true} />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          { title: 'Anon Spending', desc: 'No KYC, privacy-first transactions.' },
          { title: 'Phantom Integration', desc: 'Seamless wallet connection on Solana.' },
          { title: 'Use Everywhere', desc: 'Xbox, local shops, supermarkets, and partners.' },
        ].map((f) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-xl border border-white/10 neon-border bg-black/30">
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      <Roadmap />
      <Partners />
    </div>
  )
}


