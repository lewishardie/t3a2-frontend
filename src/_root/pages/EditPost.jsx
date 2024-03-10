
import { useLocation } from 'react-router-dom';
import UpdateForm from '../../components/forms/UpdateForm';
import { MdOutlineAddBox } from "react-icons/md";

const EditPost = () => {
    const location = useLocation()
    const { post } = location.state

    return (
        <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5x1 flex-start gap-3 justify-start w-full border-b-2 pb-2">
          <MdOutlineAddBox size={35}/>
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit a post</h2>
        </div>
            <UpdateForm post={post}/>
      </div>
    </div>
    );
    };

export default EditPost;