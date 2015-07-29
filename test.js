import { equal } from 'assert';
import commonBem from './index';

const bem = commonBem.lock('grid');

it('should bem', () =>
  equal(bem(), 'grid'));

it('should bem elem "row"', () =>
  equal(bem('row'), 'grid__row'));

it('should bem elem "col"', () =>
  equal(bem('col'), 'grid__col'));

it('should bem boolean mod "fixed"', () =>
  equal(bem({ fixed: true }), 'grid grid--fixed'));

it('should bem mod "color" for elem "col"', () =>
  equal(bem('col', { size: 'md' }), 'grid__col grid__col--size-md'));
