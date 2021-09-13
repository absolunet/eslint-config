//--------------------------------------------------------
//-- package - Given-When-Then
//--------------------------------------------------------
import path from "path";
import * as gwt from "../../../../test/standards/package.gwt";

const given = { ...gwt.given };
const when = { ...gwt.when };
const then = { ...gwt.then };

given.currentRoot = () => {
	given.root(path.join(__dirname, "..", ".."));
};

export { given, when, then };
