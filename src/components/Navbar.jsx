import React from 'react';
import { Link } from 'react-router-dom';
import { MenuElements } from '../data/MenuElements';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <>
        <ul className={this.state.clicked ? 'navbar - menu active' : 'navbar-menu'}>
          {MenuElements.map((item) => {

          })}
          <li>
            <a href="#ej1">Ejercicio 1</a>
          </li>
          <li>
            <a href="#ej2">Ejercicio 2</a>
          </li>
          <li>
            <a href="#ej3">Ejercicio 3</a>
          </li>
        </ul>
      </>
    );
  }
}
export default Navbar;
