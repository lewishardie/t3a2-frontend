

export const PostCard = ({ post }) => {

  return (
    <div className="bg-white p-4 m-2 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">{post.title}</h3>
          <p className="text-gray-700">Author: {post.author}</p>
          {post.image && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img 
              src={post.image} 
              alt="Post Image" 
              className="w-full my-2" 
            />
          )}
          <p className="text-gray-700">{post.textArea}</p>
          <p className="text-gray-700">Category: {post.gameCategory}</p>
          <p className="text-gray-700">Time: {new Date(post.time).toLocaleString()}</p>
    </div>
  );
};


export default PostCard;