export class BaseStore {
  get<T>(key: string, defaultValue: T | undefined): T;
  set<T>(key: string, value: T): void;
  init<T>(key: string, value: T): void;
  setValue<T>(key: string, valueFunction: (v: T) => T): void;
  initValue<T>(key: string, valueFunction: (v: T) => T): void;
  toggle(key: string): void;
  toggleWith<T>(key: string, firstValue: T, secondValue: T): void;
  true(key: string): boolean;
  false(key: string): boolean;

  /**
   * key 에 해당하는 config 의 값을 비교한다.
   *
   *
   * @param {string} key
   * @param {any} value
   * @returns {boolean}
   */
  is<T>(key: string, value: T): boolean;
  remove(key: string): void;

  /**
   * 메세지 등록
   *
   * @param {string} event
   * @param {Function} originalCallback
   * @param {EventMachine} context
   * @param {number} debounceDelay
   * @param {number} throttleDelay
   * @param {boolean} enableAllTrigger
   * @param {boolean} enableSelfTrigger
   * @param {string[]} [beforeMethods=[]]
   * @returns {Function} off callback
   */
  on(
    event: string,
    originalCallback: () => void,
    context: unknown,
    debounceDelay?: number,
    throttleDelay?: number,
    enableAllTrigger?: boolean,
    enableSelfTrigger?: boolean,
    beforeMethods?: string[],
    frame?: boolean
  ): void;

  /**
   * 메세지 해제
   *
   * @param {string} event
   * @param {*} originalCallback
   */
  off(event: string, originalCallback: () => void): void;
  offAll(context: any): void;

  emit(event: string, ...args: unknown[]): void;

  /**
   * 마이크로 Task 를 실행
   *
   * @param {Function} callback  마이크로Task 형식으로 실행될 함수
   */
  nextTick(callback: () => void): void;
  trigger(event: string, ...args: unknown[]): void;
}
