import {classNames} from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	it('receives only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	it('receives first and additional classes', () => {
		const expected = 'someClass class1 class2';

		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});

	it('receives mods with true value', () => {
		const expected = 'someClass class1 class2 hovered scrollable';

		expect(
			classNames('someClass', {hovered: true, scrollable: true}, [
				'class1',
				'class2',
			]),
		).toBe(expected);
	});

	it('receives mod with false value', () => {
		const expected = 'someClass class1 class2 hovered';
		expect(
			classNames('someClass', {hovered: true, scrollable: false}, [
				'class1',
				'class2',
			]),
		).toBe(expected);
	});

	it('receives mod with undefined value', () => {
		const expected = 'someClass class1 class2 hovered';

		expect(
			classNames('someClass', {hovered: true, scrollable: undefined}, [
				'class1',
				'class2',
			]),
		).toBe(expected);
	});
});
