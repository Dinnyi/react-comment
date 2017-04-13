/**
 * Created by ige16 on 2017.4.13 0013.
 */

import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {

        let CommentNotes = this.props.data.map((comment, keys) => {
            return (
                <Comment key={keys} author={comment.author} date={comment.date}>{comment.text}</Comment>
            )
        });

        return (
            <div className="comment-list">
                <div className="comment-list-title">评论列表</div>
                {CommentNotes}
            </div>
        )
    }
}

export {
    CommentList as
    default
}