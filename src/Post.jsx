import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./post.css";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    src="http://placekitten.com/200/100"
                    alt="User"
                />
                <h3>Kittyfan</h3>
            </div>
            <img 
                className="post__image"
                src="http://placekitten.com/200/300"
                alt="Post"
            />
            <h4 className="post__caption"> <strong>Kittyfan</strong> miauu meooow nyaaa prrrr prrr fsss</h4>
        </div>
    )
}

export default Post
