import { Machine } from 'xstate';

/**
 * xstate -> 상태 노드는 구성을 지정
 * 상태 속성에 정의됨
 */
const fetchMachine = Machine({
  id: 'fetch',

  initial: 'idle',

  states: {
    idle: {
      on: {
        FETCH: 'pending',
      },
    },
    pending: {
      on: {
        FULLFILL: 'success',
        REJECT: 'failure',
      },
    },
    sucess: {
      // initial child state
      initial: 'items',

      // child states
      states: {
        items: {
          on: {
            'ITEM.CLICK': 'item',
          },
        },
        item: {
          on: {
            BACK: 'items',
          },
        },
      },
    },
    failure: {
      on: {
        RETRY: 'pending',
      },
    },
  },
});

/**
 * state node type
 * - 원자 상태 노드에는 자식 상태가 없음
 * - 복합 상태 노드의 경우는 하나 이상의 하위 상태 포함, key인 initial state가 존재함
 * - 병렬상태 노드는 두개 이상의 자식을 포함, 초기 상태가 없음
 */
const machine = Machine({
  id: 'fetch',
  initial: 'idle',
  states: {
    idle: {
      type: 'atomic',
      on: {
        FETCH: 'pending',
      },
    },
    pending: {
      type: 'parallel',
      states: {
        resource1: {
          type: 'compound',
          initial: 'pending',
          states: {
            pending: {
              on: {
                'FULLFILL.resource1': 'success',
              },
            },
          },
        },
        resource2: {
          type: 'compound',
          initial: 'pending',
          states: {
            pending: {
              on: {
                'FULLFILL.resource2': 'success',
              },
            },
            success: {
              type: 'final',
            },
          },
        },
        onDone: 'success',
      },
    },
    success: {
      type: 'compound',
      initial: 'items',
      states: {
        items: {
          on: {
            'ITEM.CLICK': 'item',
          },
        },
        item: {
          on: {
            'BACK': 'items',
          },
        },
        hist: {
          type: 'history',
          history: 'shallow',
        },
      },
    },
  },
});

