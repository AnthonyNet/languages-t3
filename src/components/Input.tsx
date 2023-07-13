import React from 'react'

type Props = {
	  inputText: string;
}

const Input = ({inputText}:Props) => {
  return <input className="text-center border-2" type="text" placeholder={inputText} />
}

export default Input