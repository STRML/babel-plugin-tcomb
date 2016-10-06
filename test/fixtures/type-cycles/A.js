import type {Foo} from './B'

export default class Base {
  fn(a: Foo) {
    return a
  }
}
