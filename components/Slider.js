import Image from 'next/image'
import React from 'react'
import sliderStyle from "@/Style/slider.module.css"

const Slider = ({ items, widht, height, reverse = "false" }) => {
  return (
    <div
      reverse={reverse}
      className={`w-[calc(100%-12%)]  h-[var(--height)] overflow-hidden ${sliderStyle.slider}`}
      style={{ "--width": widht, "--height": height, "--quantity": items.length }}
    >
      {/* list */}
      <div className={`flex w-full list min-w-[calc(var(--width) * var(--quantity))] relative`}>
        {items.map((image, index) => (
          <div className={`${sliderStyle.item}`} key={index} style={{ "--position": index }}>
            <Image 
              src={image} 
              alt={`slider image ${index + 1}`}
              width={parseInt(widht)} 
              height={parseInt(height)}
              // objectFit="contain" 
              quality={100} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
