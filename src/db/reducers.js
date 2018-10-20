import {requireAll} from "./utils";

export default Object.assign(
  {},
  ...requireAll(require.context("../modules", true, /reducers\.js$/))
);
