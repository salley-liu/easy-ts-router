
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [{
    file: 'dist/bundle.js',
    format: 'cjs',
  }, ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
      tsconfig: "tsconfig.json",
    }),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
}