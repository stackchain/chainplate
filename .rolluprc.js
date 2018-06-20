import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolver from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

// Require understands JSON files.
const packageJson = require('./package.json');
const peerDependencies = Object.keys(packageJson.peerDependencies);

function config() {
	return {
		input: 'src/components/index.js',
		output:
			{ 
				name: 'chainplate',
				file: 'dist/chainplate.js', 
				format: 'umd',			
				globals: {
					'react': 'React',
					'react-dom': 'ReactDOM',
					'reactstrap': 'Reactstrap',
					'prop-types': 'PropTypes',
					'react-popper': 'ReactPopper',
					'react-transition-group': 'ReactTransitionGroup',
				},
				sourcemap: true		
			},
		external: peerDependencies,
		plugins: [
			resolver({
				jsnext: true,
				main: true,
				browser: true,
				extensions: [
					'.js',
					'.jsx',
					'.json'
				]
			}),
			commonjs({
				include: 'node_modules/**'
			}),
			eslint({

			}),
			babel({
				exclude: 'node_modules/**',
				externalHelpers: true,
			}),
		]
	}
};

const umdFullConfig = config();

// Validate globals in main UMD config
const missingGlobals = peerDependencies.filter(dep => !(dep in umdFullConfig.output.globals));
if (missingGlobals.length) {
  console.error('All peer dependencies need to be mentioned in globals, please update rollup.config.js.');
  console.error('Missing: ' + missingGlobals.join(', '));
  console.error('Aborting build.');
  process.exit(1);
}

export default [
	umdFullConfig
]
