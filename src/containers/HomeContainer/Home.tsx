import * as React from 'react';

import { HomeProps } from './IHomeProps';
import { HomeState } from './IHomeState';

class Home extends React.Component<HomeProps, HomeState> {
  state = {
    text: '',
    error: false
  }
  handleChange = (event: any): void => {
    event.preventDefault();
      this.setState({
        text: event.target.value,
        
      })

  }

  handleClick = (): void => {
    if (this.state.text !== '') {
      this.props.textChange(this.state.text);
      this.setState({
        error: false
      })
      this.props.changeBool();
    } else if(this.state.text === '') {
      this.setState({
        text: '',
        error: true
      })
    }
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <h1 className={"home__title"}>React boilerplate with postcss and typescript</h1>
        <p className={"home__text"}>{this.props.text}</p>
        {this.props.change && <p className={"home__changed"}>Boolean changed!</p>}
        {this.state.error && <label className={"home__error"}>there is an error!</label>}
        <input
          type="text"
          placeholder={"type here your value!"}
          onChange={this.handleChange}
          className={"home__input"}
        />
        <button
          onClick={this.handleClick}
          className={"home__button"}
        >
          change text
        </button>
      </React.Fragment>
    )
  }
}

export default Home;