export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 text-sm text-gray-400">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-gray-300">WEN BRRR • Ticker: WENBRRR • CA: tba</p>
            <p className="text-gray-500 text-xs">Anon spending. No KYC. High risk. DYOR.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://t.me/WENBRR" target="_blank" rel="noreferrer" className="hover:text-white">Telegram</a>
            <a href="https://x.com/WEN_BRR" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-600">© {new Date().getFullYear()} WEN BRRR • WenBrrr Technologies FZ-LLC, Dubai (fictional)</p>
      </div>
    </footer>
  )
}


