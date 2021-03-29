import { assign, createMachine, MachineOptions } from 'xstate';
import search from '../services/github';


export interface SearchContext {
  result: Array<any>;
}

export type SearchState = 
  | {
    value: 'idle';
    context: SearchContext;
  }
  | {
    value: 'searching';
    context: SearchContext;
  }
  | {
    value: 'loaded';
    context: SearchContext;
  }
  | {
    value: 'failure';
    context: SearchContext;
  }

export type SearchEvent =
  | { 
    type: 'SEARCH';
  };


const stateChart = {
  id: 'search',
  context: {
    result: [],
  },
  initial: 'idle',
  on: {
    SEARCH: [
      {
        target: 'searching',
        cond: {
          type: 'search query has more than one character',
        },
      },
      {
        target: 'idle',
        actions: ['resetSearchResults'],
      },
    ],
  },
  states: {
    idle: {
      on: {
        SEARCH: {
          target: 'searching',
        },
      },
    },
    searching: {
      invoke: {
        src: 'searchService',
        onDone: {
          target: 'loaded',
          actions: ['storeResult'],
        },
        onError: {
          target: 'failure',
        },
      },
      on: {
        SEARCH: {
          target: 'searching',
        },
      },
    },
    loaded: {},
    failure: {},
  },
};

const machineConfig: Partial<MachineOptions<SearchContext, any>> = {
  guards: {
    'search query has more than one character': (context, event) => {
      return event.q.length >= 2;
    },
  },
  services: {
    searchService: (_, event) => {
      return search(event.q);
    },
  },
  actions: {
    storeResult: assign({
      result: (_, event): any => {
        return event;
      },
    }),
    // resetSearchResults: assign({
    //   result: () => {
    //     return [];
    //   },
    // }),
  },
};

export const searchMachine = createMachine<SearchContext, SearchEvent, SearchState>(stateChart, machineConfig);
export type searchMachineType = typeof stateChart;
