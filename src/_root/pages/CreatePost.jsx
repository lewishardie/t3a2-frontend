import React from 'react'
import PostForm from '../../components/forms/PostForm'


const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5x1 flex-start flex-col gap-3 justify-start w-100">
            <div>
                <h2 className="h3 fw-bold mb-0 pt-2 text-center">Create a post</h2>
            </div>

            <PostForm />
        </div>
      </div>
    </div>
  )
}

export default CreatePost