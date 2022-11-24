import React from 'react'

interface ButtonProps {
  text: string
}

export function Button({text}: ButtonProps) {
  return (
    <button className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
      {text}
    </button>
  )
}