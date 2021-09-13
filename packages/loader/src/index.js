//--------------------------------------------------------
//-- Read and process shareable config
//--------------------------------------------------------
import path                      from 'path';
import fss                       from '@absolunet/fss';
import { Joi, validateArgument } from '@absolunet/joi';
import deepMerge                 from 'deepmerge';
import prettierConfig            from 'eslint-config-prettier';
import pkgDir                    from 'pkg-dir';


module.exports = (root, filename = 'shareable-config.yaml') => {
	validateArgument('root',     root,     Joi.string().required().empty());
	validateArgument('filename', filename, Joi.string().required().empty());

	const shareableConfig = fss.readYaml(path.join(pkgDir.sync(root), filename));

	return deepMerge(shareableConfig, prettierConfig);
};
