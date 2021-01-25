import path from 'path';

export default {
	'.eslintrc.yaml':      path.join(__dirname, 'root-eslintrc.yaml'),
	'src/.eslintrc.yaml':  path.join(__dirname, 'src-eslintrc.yaml'),
	'test/.eslintrc.yaml': path.join(__dirname, 'test-eslintrc.yaml')
};
