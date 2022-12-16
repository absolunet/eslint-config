//--------------------------------------------------------
//-- node/script - Feature tests
//--------------------------------------------------------
import configTests from "../../../../test/feature/config-tests";
import { given, when, then } from "./script.gwt";

describe(`Validate that 'node/script' works`, () => {
	configTests({ given, when, then });
});
