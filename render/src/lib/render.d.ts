// 基于阿里的pro-components 来设计
export type BaseRenderSchemaType = 'string' | 'number' | 'object';
export type MaterialRenderSchemaType = 'form' | 'table' | 'list';
export type PageRenderSchemaType = 'page';
export type CustomRenderSchemaType = string;

export type RenderSchemaType =
  | BaseRenderSchemaType
  | MaterialRenderSchemaType
  | CustomRenderSchemaType
  | PageRenderSchemaType;
export interface RenderSchema {
  // 组件类型
  type: RenderSchemaType;
  // 组件名称
  name: string;
  // 组件属性
  props: Record<string, any>;
  // 组件子组件
  children?: RenderSchema[];
}
export interface RenderProps {
  // schema结构
  schema: RenderSchema;
  // component type
  components: Record<BaseRenderComponentEnum, React.ComponentType<any>>;
  // custom component type
  customComponents?: Record<string, React.ComponentType<any>>;
}

// 组件类型枚举
// 如果是自定义组件 则需要根据这个枚举来实现对应的自定义组件
export enum BaseRenderComponentEnum {
  Input = 'Input',
  InputNumber = 'InputNumber',
  Select = 'Select',
  DatePicker = 'DatePicker',
  TimePicker = 'TimePicker',
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  Switch = 'Switch',
}
