//--------------------------------------------------------
//-- node/module - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./module.gwt";

describe(`Validate that 'node/module' works`, () => {
	configTests({ given, when, then });
});
