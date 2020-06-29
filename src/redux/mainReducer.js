import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7105Reducer from '../features/EmailAuth7105/redux/reducers';
import CalendarView7103Reducer from '../features/CalendarView7103/redux/reducers';
import EmailAuth7102Reducer from '../features/EmailAuth7102/redux/reducers';
import EmailAuth7099Reducer from '../features/EmailAuth7099/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7105: EmailAuth7105Reducer,
CalendarView7103: CalendarView7103Reducer,
EmailAuth7102: EmailAuth7102Reducer,
EmailAuth7099: EmailAuth7099Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});