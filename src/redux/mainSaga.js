import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView7103Saga from '../features/CalendarView7103/redux/sagas';
import EmailAuth7102Saga from '../features/EmailAuth7102/redux/sagas';
import EmailAuth7099Saga from '../features/EmailAuth7099/redux/sagas';
import CalendarView7098Saga from '../features/CalendarView7098/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView7103Saga,
EmailAuth7102Saga,
EmailAuth7099Saga,
CalendarView7098Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}