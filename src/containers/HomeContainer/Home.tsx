import * as React from 'react';

import { HomeProps} from './IHomeProps';
import { HomeState } from './IHomeState';

class Home extends React.Component<HomeProps, HomeState> {
  handleChange = (event): void => {
    event.preventDefault();
    this.setState({
      text: event.target.value,
    })
  }

  handleClick = (): void => {
    this.props.textChange(this.state.text);
    this.props.changeBool();
  }
  
  render(): JSX.Element {
    return(
      <React.Fragment>
      <h1>React boilerplate with postcss and typescript</h1>
      <p>{this.props.text}</p>
      {this.props.change && <p>Boolean changed!</p>}
      <input type="text" placeholder={"type here your value!"} onChange={this.handleChange} />
      <button onClick={this.handleClick}>change text</button>
      </React.Fragment>
    )
  }
}

export default Home;