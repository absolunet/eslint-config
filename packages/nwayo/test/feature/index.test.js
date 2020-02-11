//--------------------------------------------------------
//-- nwayo - Feature tests
//--------------------------------------------------------
import configTests           from '../../../../test/feature/config-tests';
import { given, when, then } from './index.gwt';


describe(`Validate that 'nwayo' works`, () => {

	configTests({ given, when, then });

});
