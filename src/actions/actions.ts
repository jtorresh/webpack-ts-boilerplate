
import { TEST_ACTION, TEST_ACTION_WITHOUT_PAYLOAD } from './actionTypes';
import { ActionCreator, ActionsUnion } from './ActionCreatorHelper';



export const actions = {
  testAction: (text: string) => ActionCreator(TEST_ACTION, text),
  testActionWithoutPayload: () => ActionCreator(TEST_ACTION_WITHOUT_PAYLOAD),
}


export type Actions = ActionsUnion<typeof actions>;