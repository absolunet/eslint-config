//--------------------------------------------------------
//-- core - Given-When-Then
//--------------------------------------------------------
import path     from 'path';
import * as gwt from '../../../../test/feature/config.gwt';

const given = { ...gwt.given };
const when  = { ...gwt.when };
const then  = { ...gwt.then };


given.currentRoot = () => {
	given.root(path.join(__dirname, '..', '..', 'dist', 'node'));
};


export { given, when, then };
