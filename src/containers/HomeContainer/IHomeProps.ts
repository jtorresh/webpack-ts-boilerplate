export interface IStoreProps {
  text: string;
  change: boolean;
}

export interface IDispatchProps {
  textChange;
  changeBool;
}

export type HomeProps = IStoreProps & IDispatchProps;