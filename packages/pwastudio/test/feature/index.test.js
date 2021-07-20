//--------------------------------------------------------
//-- pwastudio - Feature tests
//--------------------------------------------------------
import configTests           from '../../../../test/feature/config-tests';
import { given, when, then } from './index.gwt';


describe(`Validate that 'pwastudio' works`, () => {

	configTests({ given, when, then });

});
