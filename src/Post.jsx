import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./post.css";

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    src="http://placekitten.com/200/100"
                    alt="User"
                />
                <h3>{username}</h3>
            </div>
            <img 
                className="post__image"
                src={imageUrl}
                alt="Post"
            />
            <h4 className="post__caption"> <strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
