import React, { Component } from "react";
import Comment from "./Comment.js";

export default class CommentList extends Component {
  state = {
    isOpen: false
  };
  render() {
    const { comments } = this.props;
    if (!comments || !comments.length) return null;
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {this.state.isOpen ? "Hide comments" : "Show comments ("+comments.length+")"}
        </button>
        <ul>
          {this.showUp()}
        </ul>
      </div>
    );
  }
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  showUp() {
    if (!this.state.isOpen) return null;
    const { comments } = this.props;
    return comments.map(comment => <li key={comment.id}><Comment comment={comment} /></li>)
  }
}
