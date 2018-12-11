import React, {Component} from 'react'

export default class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render(){
    const {article} = this.props
    const isOpen = this.state.isOpen
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick = {this.toggleOpen}>
        {isOpen ? 'Close' : 'Open'}
        </button>
        {this.showUp()}
      </div>
    )
  }
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  showUp(){
    const {article} = this.props
    if (!this.state.isOpen) return null
    return <div><section>{article.text}</section>
    <br/>
    <sup>{article.date}</sup></div>
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
