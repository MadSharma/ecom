import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
     <Link href="/favorites" className="relative group flex items-center">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />

      <span className="absolute -top-2 -right-2 bg-shop_light_green text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
        0
      </span>
    </Link>
  )
}

export default FavoriteButton