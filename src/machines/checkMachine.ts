import { assign, createMachine, MachineOptions } from 'xstate';

const list = {
  checkbox1: {
    name: 'checkbox1',
    title: '체크박스1',
    checked: false,
  },
  checkbox2: {
    name: 'checkbox2',
    title: '체크박스2',
    checked: false,
  },
  checkbox3: {
    name: 'checkbox3',
    title: '체크박스3',
    checked: false,
  },
};

export interface CheckContext {
  list: typeof list;
  allChecked: boolean;
}

export type CheckState =
  | {
    value: 'idle';
    context: CheckContext;
  };

export type CheckEvent = {
    type: 'CHECK';
    name: string;
    checked: boolean;
};

export interface CheckContext {}

const state = {
  id: 'checkbox',
  context: {
    list,
    allChecked: false,
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        CHECK: {
          actions: ['checkResult'],
        },
      },
    },
  },
};

const machineConfig: Partial<MachineOptions<CheckContext, CheckEvent>> = {
  actions: {
    checkResult: assign((ctx, event) => {
      const { list } = ctx;
      const { name, checked } = event;
      const obj = Object.assign({}, list);
      obj[name].checked = checked;
      return {
        list: obj,
        allChecked: Object.keys(obj).every(key => obj[key].checked),
      };
    }),


    // checkResult: assign({
    //   list: (ctx, event) => {
    //     console.log('event', event);
    //     ctx.list[event.name].checked = event.checked;
    //     return ctx.list;
    //   },
    //   allChecked: (ctx, event) => {
    //     console.log('ctx.list', ctx.list);
    //     return ctx.allChecked;
    //   },
    // }),
  },
};

export const checkMachine = createMachine<CheckContext, CheckEvent, CheckState>(state, machineConfig);





