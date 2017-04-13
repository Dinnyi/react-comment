/**
 * Created by ige16 on 2017.4.13 0013.
 */

'use strict';

import React from 'react'
import $ from 'jquery'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.getComments();

        // setInterval( () => this.getComments(), 5000 )
    }

    handleCommentSubmit(comment) {
        let newComments = [...this.state.data, ...comment];
        console.log(newComments)

        this.setState({
            data: newComments
        })


    }

    getComments() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: comments => {
                this.setState({
                    data: comments
                })
            },
            error: (xhr, status, error) => {
                console.log(`xhr: ${xhr} / ${error} / ${xhr.status}`)
            }
        })
    }
    render() {
        return (
            <div className="comment-box">
                <h1 className="comment-title">评论</h1>
                <hr/>
                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
            </div>
        )
    }
}

export {
    CommentBox as
    default
}