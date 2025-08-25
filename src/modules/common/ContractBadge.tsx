type ContractBadgeProps = {
  address: string
  size?: 'sm' | 'lg'
}

export function ContractBadge({ address, size = 'sm' }: ContractBadgeProps) {
  const isLarge = size === 'lg'

  async function copy() {
    try {
      await navigator.clipboard.writeText(address)
      alert('Contract address copied')
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={
        `${isLarge ? 'px-4 py-2 text-sm' : 'px-3 py-1 text-xs'} rounded-full border ` +
        `border-neon-blue text-neon-blue bg-black/40 hover:bg-neon-blue/10 transition-colors shadow-neon`
      }
      aria-label={`Contract address ${address}`}
      title="Click to copy"
    >
      <span className="font-semibold">CA:</span> <span className="ml-1">{address}</span>
    </button>
  )
}


