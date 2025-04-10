'use client'

import { useRouter } from "next/navigation"

const SalesCampaignBanner = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-3 relative">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white">
            <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold animate-bounce">
                    🔥
                </span>
                <div className="text-sm sm:text-base font-bold">
                    FLASH SALE ENDS IN:
                </div>
                <div className="bg-white/20 rounded px-2 py-1 font-mono fron-bold">
                    23:59:59
                </div>
            </div>

            <div className="flex items-cenbtet gap-2">
                <span className="text-xl font-bold">⚡️</span>
                <span className="font-bold text-yellow-200 animate-pulse">
                    UP TO 95% OFF!
                </span>
            </div>

            <button className="bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-yellow-100 transition-all duration-300 shadow-md cursor-pointer" onClick={() => { router.push('/')}}>
                SHOP NOW!
            </button>
        </div>
    </div>
  )
}

export default SalesCampaignBanner