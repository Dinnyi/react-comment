/**
 * Created by ige16 on 2017.4.13 0013.
 */

'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import '../css/comment.less'
import CommentBox from './CommentBox'


ReactDOM.render(
	<Button />,
	document.getElementById('App')
);

ReactDOM.render(
	<div>
        <CommentBox url="../src/data/comments.json" />
    </div>,
	document.getElementById('App')
);

