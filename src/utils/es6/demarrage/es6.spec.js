import * as I from '../input';
import { func1, func2 } from './es6';

describe('ES6', () => {
	describe('Example', () => {
		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});
	});
});
