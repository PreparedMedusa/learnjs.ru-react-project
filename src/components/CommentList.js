import React, { Component } from "react";
import Comment from "./Comment.js";

export default class CommentList extends Component {
  state = {
    isOpen: false
  };
  render() {
    const { comments } = this.props;
    const isOpen = this.state.isOpen;
    if (!comments || !comments.length) return null;
    const comment = comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? "Hide comments" : "Show comments"}
        </button>
        <ul>{this.showUp(comment)}</ul>
      </div>
    );
  }
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  showUp(comment) {
    if (!this.state.isOpen) return null;
    return comment;
  }
}
