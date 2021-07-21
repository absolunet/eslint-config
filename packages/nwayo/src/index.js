//--------------------------------------------------------
//-- ESLint config
//--------------------------------------------------------
import path   from 'path';
import pkgDir from 'pkg-dir';
import fss    from '@absolunet/fss';

module.exports = fss.readYaml(path.join(
	pkgDir.sync(__dirname),
	'shareable-config.yaml'
));
