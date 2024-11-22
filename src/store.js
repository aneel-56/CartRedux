import { createStore } from "redux"; //createStore
import rootred from "./redux/reducers/main";

const store = createStore(rootred);

export default store;
