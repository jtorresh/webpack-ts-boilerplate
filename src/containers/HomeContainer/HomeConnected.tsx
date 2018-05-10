import { connect, Dispatch } from 'react-redux';

import Home from './Home';
import { IState } from '../../types/IState';
import { IDispatchProps, IStoreProps, HomeProps} from './IHomeProps';
import { actions, Actions } from '../../actions/actions';

const mapStateToProps = (state: IState): IStoreProps => (
  {
    text: state.text,
    change: state.change
  }
)

const mapDispatchToProps = (dispatch: Dispatch<Actions> ):IDispatchProps => (
  {
    textChange: text => dispatch(actions.testAction(text)),
    changeBool: () => dispatch(actions.testActionWithoutPayload())
  }
)

const HomeConnected = connect<IStoreProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)(Home);

export default HomeConnected;