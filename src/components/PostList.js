import React from "react";
import Post from './Post';

const PostList = ({ posts}) =>{
    return (
    <div>
        <h2>Entradas Recientes</h2>
        {posts.map(post => (
            <Post key={post.id} post={post} />
        ))}
    </div>        
    );
};

export default PostList;
