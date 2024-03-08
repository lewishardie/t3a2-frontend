import { useState } from 'react';
import { useQuery } from '../../context/QueryContext'; // Import the updatePost and deletePost functions

const EditPost = ({ post, onClose }) => {


    const {deletePost, updatePost} = useQuery()

    const [editedPost, setEditedPost] = useState(post);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPost({ ...editedPost, [name]: value });
    };

    const handleUpdatePost = async () => {
        try {
        await updatePost(editedPost); // Call the updatePost function with the edited post data
        onClose(); // Close the edit post modal or component after successful update
        } catch (error) {
        console.error("Error updating post:", error);
        // Handle error
        }
    };

    const handleDeletePost = async () => {
        try {
        await deletePost(post._id); // Call the deletePost function with the post ID
        onClose(); // Close the edit post modal or component after successful deletion
        } catch (error) {
        console.error("Error deleting post:", error);
        // Handle error
        }
    };

    return (
        <div>
        <input type="text" name="title" value={editedPost.title} onChange={handleChange} />
        <textarea name="textArea" value={editedPost.textArea} onChange={handleChange} />
        {/* Other input fields for editing */}
        <button onClick={handleUpdatePost}>Save</button>
        <button onClick={handleDeletePost}>Delete</button>
        </div>
    );
};

export default EditPost