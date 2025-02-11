import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Render from './render';
import { BaseRenderComponentEnum, RenderSchema } from './render.d';

// 自定义系统请求拦截器 和 响应拦截器
// {
//   code: 200,
//   message: 'success',
//   data: {
//     users: [
//       { id: 1, name: 'John' },
//       { id: 2, name: 'Jane' },
//     ],
//   },
// };

// fetchType 自定义处理逻辑
// 1. 如果 fetchType 为 table 则 需要 处理 表格的 数据
// 2. 如果 fetchType 为 form 则 需要 处理 表单的 数据

const pageSchema: RenderSchema = {
  type: 'page',
  name: 'page',
  props: {},
  children: [
    {
      type: 'form',
      name: 'form',
      props: {},
      children: [
        {
          type: 'input',
          name: 'input',
          props: {},
        },
        {
          type: 'select',
          name: 'select',
          props: {
            fetchUrl: 'http://localhost:3000/api/v1/users',
          },
        },
      ],
    },
    {
      type: 'table',
      name: 'table',
      props: {
        fetchUrl: 'http://localhost:3000/api/v1/users',
        fetchType: "table"
      },
      children: [
        {
          type: 'table.column',
          name: 'table.column',
          props: {},
        },
      ],
    },
  ],
};

const TestComponent = (title: string) => () => <div>{title}</div>;

const components = {
  [BaseRenderComponentEnum.Input]: TestComponent('input'),
  [BaseRenderComponentEnum.InputNumber]: TestComponent('inputNumber'),
  [BaseRenderComponentEnum.Select]: TestComponent('select'),
  [BaseRenderComponentEnum.DatePicker]: TestComponent('datePicker'),
  [BaseRenderComponentEnum.TimePicker]: TestComponent('timePicker'),
  [BaseRenderComponentEnum.Radio]: TestComponent('radio'),
  [BaseRenderComponentEnum.Checkbox]: TestComponent('checkbox'),
  [BaseRenderComponentEnum.Switch]: TestComponent('switch'),
};

describe('Render', () => {
  it('render page successfully', () => {
    const { baseElement } = render(<Render schema={pageSchema} components={components}  />);
    expect(baseElement).toBeTruthy();
  });
});
