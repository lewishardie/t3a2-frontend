import { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import { AiOutlineMenu } from 'react-icons/ai'


const PopOutNav = () => {
  const [ showPopBar, setShowPopBar] = useState(true);

  return (
    <div>
      <div className="block m-2 ml-4 mt-3 text-xl" onClick={() => setShowPopBar((prev) => !prev)}>

        {showPopBar ? <ImCancelCircle /> :
        <AiOutlineMenu />}

      </div>
    </div>
  )
}

export default PopOutNav