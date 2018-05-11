import * as React from 'react';
import { HomeComponentProps } from './IHomeComponentProps';


const HomeComponent: React.SFC<HomeComponentProps> = (props: HomeComponentProps): JSX.Element => (
  <React.Fragment>
    <h1 className={"home__title"}>React boilerplate with postcss and typescript</h1>
    <p className={"home__text"}>{props.text}</p>
    {props.change && <p className={"home__changed"}>Boolean changed!</p>}
    {props.error && <label className={"home__error"}>there is an error!</label>}
    <input
      type="text"
      placeholder={"type here your value!"}
      onChange={props.handleChange}
      className={"home__input"}
    />
    <button
      onClick={props.handleClick}
      className={"home__button"}
    >
      change text
    </button>
  </React.Fragment>
)


export default HomeComponent;