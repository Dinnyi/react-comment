/**
 * Created by ige16 on 2017.4.13 0013.
 */
'use strict';

import React from 'react'

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <div className="content">
                    <div className="metedata">
                        <span className="author">{this.props.author}</span>
                        <span className="date">{this.props.date}</span>
                    </div>
                    <div className="text">{this.props.children}</div>
                </div>
            </div>
        )
    }
}

export { Comment as default }