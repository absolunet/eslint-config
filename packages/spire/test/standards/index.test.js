//--------------------------------------------------------
//-- spire - Standards tests
//--------------------------------------------------------
import packageTests          from '../../../../test/standards/package-tests';
import { given, when, then } from './index.gwt';


describe(`Validate 'spire' package.json`, () => {

	packageTests({ given, when, then });

});
