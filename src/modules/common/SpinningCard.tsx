import { motion } from 'framer-motion'

type CardVariant = 'bronze' | 'silver' | 'diamond'

type SpinningCardProps = {
  title?: string
  variant?: CardVariant
  fullEffects?: boolean
  spin?: boolean
  glow?: boolean
  scale?: number
}

function getVariantStyles(variant: CardVariant) {
  switch (variant) {
    case 'bronze':
      return {
        cardClass: 'card-variant-bronze',
        borderFrom: '#cd7f32',
        borderTo: '#8a5a2b',
      }
    case 'silver':
      return {
        cardClass: 'card-variant-silver',
        borderFrom: '#e0e0e0',
        borderTo: '#9e9e9e',
      }
    case 'diamond':
    default:
      return {
        cardClass: 'card-variant-diamond',
        borderFrom: '#00e5ff',
        borderTo: '#a855f7',
      }
  }
}

export function SpinningCard({ title = 'WEN BRRR', variant = 'diamond', fullEffects = false, spin = true, glow = false, scale = 1 }: SpinningCardProps) {
  const v = getVariantStyles(variant)
  const extraGlow = (fullEffects || glow) ? '0 0 25px rgba(0, 229, 255, 0.4), 0 0 35px rgba(168, 85, 247, 0.35)' : '0 0 0 rgba(0,0,0,0)'

  return (
    <div className="w-full flex items-center justify-center scene" style={{ transform: `scale(${scale})` }}>
      <motion.div
        className={`card-3d card-surface ${v.cardClass}`}
        initial={{ rotateY: 0 }}
        animate={spin ? { rotateY: 360 } : { rotateY: 0 }}
        transition={spin ? { repeat: Infinity, ease: 'linear', duration: 10 } : undefined}
        whileHover={spin ? { scale: 1.03 } : undefined}
        style={{
          borderImage: `linear-gradient(45deg, ${v.borderFrom}, ${v.borderTo}) 1`,
          boxShadow: `0 10px 30px rgba(0,0,0,0.4), ${extraGlow}`,
        }}
      >
        <div className="shine" />
        <div className="inner-border" />
        <div className="h-full w-full p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-gray-300 layer-z1">
            <span>WEN BRRR</span>
            <span>SOL • 2025</span>
          </div>
          <div className="layer-z2">
            <div className="text-lg font-bold tracking-wider">{title}</div>
            <div className="mt-1 text-xs text-gray-200/70">Anon spending card</div>
          </div>
          <div className="text-right text-xs text-gray-300/70 layer-z3">No KYC • Phantom</div>
        </div>
      </motion.div>
    </div>
  )
}


