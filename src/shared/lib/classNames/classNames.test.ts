import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('main class', () => {
    const expectValue = 'class';
    expect(classNames('class')).toBe(expectValue);
  });

  test('with additional classes', () => {
    const expectValue = 'class class1 class2';
    expect(classNames('class', {}, ['class1', 'class2'])).toBe(expectValue);
  });

  test('with mods', () => {
    const expectValue = 'class class1 class2 clicked scrolled';
    expect(
      classNames('class', { clicked: true, scrolled: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expectValue);
  });

  test('with mods false', () => {
    const expectValue = 'class class1 class2 scrolled';
    expect(
      classNames('class', { clecked: false, scrolled: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expectValue);
  });

  test('with mods undefined', () => {
    const expectValue = 'class class1 class2 scrolled';
    expect(
      classNames('class', { clecked: undefined, scrolled: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expectValue);
  });
});
