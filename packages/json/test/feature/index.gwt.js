//--------------------------------------------------------
//-- json - Given-When-Then
//--------------------------------------------------------
import * as gwt from '../../../../test/feature/config.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


given.currentRoot = () => {
	given.root(`${__dirname}/../../dist/node`);
};


export { given, when, then };
