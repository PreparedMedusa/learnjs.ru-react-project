import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
    }
    render(){
        const {comments} = this.props
        console.log('comments is : ', comments)
        if (comments!==undefined){
        const comment = comments.map(
            comment => <li key = {comment.id}>{comment.text}</li>
            )
            return comment
        }
        console.log('comment is : ', comment)
        return(
             <ul>
                 {comment}
             </ul>
        )
    }
}