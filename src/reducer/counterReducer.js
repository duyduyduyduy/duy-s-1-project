import { INCREMENT, DECREMENT } from '../action/types';

    //---------------------- State ----------------------
    const INITIAL_STATE = {

        count: 0,
        name:"Bùi Thanh Duy"
    };
    //----------------------------------------------------

    
    //---------------------- Reducer ----------------------
    const counterReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case INCREMENT:

               return {

                 ...state, count: state.count + 1,

               };

            case DECREMENT:

               return {
                  ...state, count: state.count - 1,

               };

             default: return state;

        }

    };
    //-------------------------------------------------------

    export default counterReducer;