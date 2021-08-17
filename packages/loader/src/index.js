//--------------------------------------------------------
//-- Read and process shareable config
//--------------------------------------------------------
import deepMerge                 from 'deepmerge';
import prettierConfig            from 'eslint-config-prettier';
import path                      from 'path';
import pkgDir                    from 'pkg-dir';
import fss                       from '@absolunet/fss';
import { Joi, validateArgument } from '@absolunet/joi';


module.exports = (root, filename = 'shareable-config.yaml') => {
	validateArgument('root',     root,     Joi.string().required().empty());
	validateArgument('filename', filename, Joi.string().required().empty());

	const shareableConfig = fss.readYaml(path.join(pkgDir.sync(root), filename));

	return deepMerge(shareableConfig, prettierConfig);
};
