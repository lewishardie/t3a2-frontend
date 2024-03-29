import React from 'react'
import PostForm from '../../components/forms/PostForm'
import { MdOutlineAddBox } from "react-icons/md";


const CreatePost = () => {

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5x1 flex-start gap-3 justify-start w-full border-b-2 pb-2">
          <MdOutlineAddBox size={35}/>
          <h2 className="h3-bold md:h2-bold text-left w-full">Create a post</h2>
        </div>
            <PostForm />
      </div>
    </div>
  )
}

export default CreatePost