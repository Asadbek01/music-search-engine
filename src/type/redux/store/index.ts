import { compose, createStore } from "redux";
import { ReduxStore } from "../../ReduxStore";
export const InitialState: ReduxStore ={
    music: {
      songs:  []
    }
}

const composeFunction =  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

createStore(
     // mainReuducer
     InitialState,
    composeFunction
)