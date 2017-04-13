/**
 * Created by ige16 on 2017.4.13 0013.
 */
'use strict';

import React from 'react'
import {
    Form,
    Icon,
    Input,
    Button
} from 'antd';
const FormItem = Form.Item;

class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log('提交表单... ...')

        let author = this.refs.author.refs.input.value,
            text = this.refs.text.refs.input.value;

        console.log(this);
        console.log(author, text);

        this.props.onCommentSubmit([{
            author,
            text,
            date: "刚刚"
        }]);

        this.refs.author.refs.input.value = '';
        this.refs.text.refs.input.value = '';
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <div className="comment-form-title">发表评论</div>
                <FormItem>
                    <Input ref="author"/>
                </FormItem>
                <FormItem>
                    <Input type="textarea" rows={4} ref="text"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="comment-form-button">
                        提交
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

export {
    CommentForm as
    default
}