import React, {Component} from 'react'

export default class Article extends Component {
  render(){
    const {article} = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button>Open</button>
        <section>{article.text}</section>
        <br/>
        <sup>{article.date}</sup>
      </div>
    )
  }
}

// export default function Article(props) {
//   const {article} = props
//   return (
//     <div>
//       <h3>{article.title}</h3>
//       <section>{article.text}</section>
//       <br/>
//       <sup>{article.date}</sup>
//     </div>
//   )
// }
