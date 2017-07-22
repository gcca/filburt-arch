import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import angular from 'rollup-plugin-angular';

export default {
  entry: 'src/main.ts',
  format: 'iife',
  dest: 'build/bundle.es2015.js',
  sourceMap: true,
  plugins: [
    angular(),
    typescript(),
    alias({
      rxjs: __dirname + '/node_modules/rxjs-es',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
  ],
  external: [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
  ],
  globals: {
    '@angular/common': 'vendor._ng_common',
    '@angular/compiler': 'vendor._ng_compiler',
    '@angular/core': 'vendor._ng_core',
    '@angular/platform-browser': 'vendor._ng_platformBrowser',
    '@angular/platform-browser-dynamic': 'vendor._ng_platformBrowserDynamic',
  },
};
