import React, { Component } from "react";
import CommentList from "./CommentList.js";
import toggleOpen from "../decorators/toggleOpen.js";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    const { article } = this.props;
    const isOpen = this.state.isOpen;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        {this.showUp()}
      </div>
    );
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  showUp() {
    const { article } = this.props;
    if (!this.state.isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }
}

export default toggleOpen(Article);
