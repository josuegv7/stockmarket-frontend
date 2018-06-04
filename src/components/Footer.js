import React, { Component } from 'react';
import grid from '../style/Grid.css';
import main from '../style/Main.css';


class Footer extends Component {
  render(){
    return(
      <footer>
        <div className={main.row}>
          <div className={grid.span_1_of_2}>
            <ul className={main.footer_nav}>
              <li><a href="/">Home</a></li>
              <li><a href="/">Stocks</a></li>
              <li><a href="/">Info</a></li>
            </ul>
          </div>
        </div>
        <div className={main.row}>
          <p>
            CopyRight &copy; 2018
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer;
