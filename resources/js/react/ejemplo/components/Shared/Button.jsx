import React from 'react'

function Button({text, bgColor, textColor,}) {
  const estilosBase= "w-1/4 m-4 cursor-pointer hover:scale-105 duration-300 p-2 rounded-full relative z-10";
  return (
    <button className={`${bgColor} ${bgColor} ${textColor} ${estilosBase}`}>
        {text}
    </button>
  )
}

export default Button