'use client'

import { useState } from "react"
import { Product } from "../../../sanity.types"
import { setLazyProp } from "next/dist/server/api-utils"
import { Loader2, ShoppingCart } from "lucide-react"
import { formatPrice } from "@/lib/utils"

type AddToCartButtonProps = {
    product: Product
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const handleAddToCart = () => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }
    , 2000)
  }

  if (!product.price) {
    return null
  }

  return (
    <div>
        <button 
            onClick={handleAddToCart}
            disabled={isLoading} 
            className="w-full flex items-center justify-center mt-2 cursor-pointer bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-full text-xl font-bold hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-[1.02] active:scale-[1.02] shadow-xl disabled:opacity-80 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100 disabled:hover:from-red-500 disabled:hover:to-red-600"
        >
            {isLoading ? (
                <>
                    <Loader2 className="animate-spin w-6 h-6 mr-2" />
                    <span>Adding to Cart...</span>
                </>
            ) : (
                <>
                    <ShoppingCart className="w-6 h-6 mr-2" />
                    Add to cart - {formatPrice(product.price)}
                </>
            )}
        </button>
    </div>
  )
}

export default AddToCartButton