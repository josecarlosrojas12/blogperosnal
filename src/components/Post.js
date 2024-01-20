import React from "react";

const Post = ({ post }) =>{
    return(
        <div className="post">
            <img src={post.img} alt={post.title}></img>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
};

export default Post;