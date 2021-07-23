//--------------------------------------------------------
//-- ESLint config
//--------------------------------------------------------
import deepMerge      from 'deepmerge';
import prettierConfig from 'eslint-config-prettier';
import path           from 'path';
import pkgDir         from 'pkg-dir';
import fss            from '@absolunet/fss';

const shareableConfig = fss.readYaml(path.join(
	pkgDir.sync(__dirname),
	'shareable-config.yaml'
));

module.exports = deepMerge(shareableConfig, prettierConfig);
