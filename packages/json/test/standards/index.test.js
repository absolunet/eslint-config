//--------------------------------------------------------
//-- json - Standards tests
//--------------------------------------------------------
import packageTests from "../../../../test/standards/package-tests";
import { given, when, then } from "./index.gwt";

describe(`Validate 'json' package.json`, () => {
	packageTests({ given, when, then });
});
