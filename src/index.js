import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactFCCtest from 'react-fcctest';
import "./styles.css";

class App extends React.Component {
  state={
    quote:{},
    color:""
  }
   newQuote=async ()=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    await axios.get('https://quota.glitch.me/random')
    .then(res=>this.setState({
      quote:Object.assign({},res.data),
      color:randomColor
    }))
    .catch(err=>alert(err))
  }


  async componentDidMount(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
   await axios.get('https://quota.glitch.me/random')
    .then(res=>this.setState({
      quote:Object.assign({},res.data),
      color:randomColor
    }))
    .catch(err=>alert(err))
    
  }

  render(){
    document.body.style.background = "#"+this.state.color;
  return (
    <div>
       
    <div id="quote-box" >
      <div id="text" style={{color:"#"+this.state.color}}>
      <FontAwesomeIcon style={{marginRight:'15px'}}id="fa" icon={faQuoteLeft}/>
      <span>{this.state.quote['quoteText']}</span>
      </div>
      <div id="author" style={{color:"#"+this.state.color}}>
      <div class="auth" >-{this.state.quote["quoteAuthor"]}</div>
      </div>
      
      <div id="new-quote">
      <a style={{color:"#"+this.state.color}} id="tweet-quote" href="twitter.com/intent/tweet" target='blank'>
      <FontAwesomeIcon  icon={faTwitterSquare}/>
      </a>
        <button class='button' style={{backgroundColor:"#"+this.state.color}}onClick={this.newQuote}>New quote</button>
      </div>
    </div>
   <div class="footer">
   Happy Motivation
   by Mayank Vikesh
   </div>

   </div>
  
  );
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
