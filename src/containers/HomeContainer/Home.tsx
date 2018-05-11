import * as React from 'react';

import { HomeProps } from './IHomeProps';
import { HomeState } from './IHomeState';
import HomeComponent from '../../components/HomeComponent';

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
    } else if (this.state.text === '') {
      this.setState({
        text: '',
        error: true
      })
    }
  }

  render(): JSX.Element {
    return (
      <React.Fragment>
        <HomeComponent
          text={this.props.text}
          change={this.props.change}
          error={this.state.error}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
        
      </React.Fragment>
    )
  }
}

export default Home;