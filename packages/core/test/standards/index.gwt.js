//--------------------------------------------------------
//-- core - Given-When-Then
//--------------------------------------------------------
import * as gwt from '../../../../test/standards/package.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


given.currentRoot = () => {
	given.root(`${__dirname}/../..`);
};


export { given, when, then };
