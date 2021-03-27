import { Machine } from 'xstae';

const lightMachine = Machine({
  // machine identifier
  id: 'light',
  // initial state
  initial: 'green',

  // 전체 시스템에 대한 로컬 컨텍스트
  context: {
    elapsed: 0,
    direction: 'east',
  },

  // state 정의
  /**
   * state: 특정 시점에서 시스템에 대한 추상적 표현.
   * App과 상호 작용시 입데이트로 인해 상태 변경
   */
  states: {
    green: {
      // 문자열 통해 참조됨
      entry: 'alertGreen',
    },
    yellow: {},
    red: {},
  },
}, 
/**
 * 두번째 인자를 통해 option 전달
 * 각 action값들은 실제 machine에서 쓰임
 */
{
  // action
  actions: {
    // action 실행
    alertGreen: (context, event) => {
      alert('Green!');
    },
  },
  // 활동
  activities: {

  },
  delays: {

  },
  guards: {

  },
  services: {

  },
});

/**
 * withConfig를 이용하여 machine 확장 가능
 */
lightMachine.withConfig({
  actions: {
    alertGreen: (context, event) => {
      console.log('green');
    },
  },
});

/**
 * context값 지정
 * 이 경우 원래 컨텍스트에 대한 shallow merge를 진행하지 않고
 * withContext에 제공된 컨텍스트로 대체함.
 * machine.context를 통해서 컨텍스트를 수동으로 병합 가능
 * @example
 * lightMachine.withContext({
 *  ...lightMachine.context,
 *  elapsed: 1000,
 * })
 * 
 */
lightMachine.withContext({
  elapsed: 1000,
  direction: 'north',
});


/**
 * state.changed
 * 이전 상태에서 상태가 변경 되었는지 여부 확인
 * * value가 이전 value와 다른 경우
 * * 새로운 action이 실행된 경우
 */
const { initialState } = lightMachine;
console.log(initialState.changed);

const nextState = lightMachine.transition(initialState, 'TIMER');
console.log(nextState.changed);

/**
 * state.done
 * 상태가 최종 상태인지에 대한 여부 확인
 */
const answeringMachine = Machine({
  initial: 'unanswered',
  states: {
    unanswered: {
      on: {
        ANSWER: 'answered',
      },
    },
    answered: {
      type: 'final',
    },
  },
});

const { initialState } = answeringMachine;
console.log(initialState.done);

const answeredState = answeringMachine.transition(initialState, 'ANSWER');
console.log(answeredState.done);

