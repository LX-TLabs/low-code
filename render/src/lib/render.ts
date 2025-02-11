// 基于阿里的pro-components 来设计
export type BaseRenderSchemaType = 'string' | 'number' | 'object';
export type MaterialRenderSchemaType = 'form';
export type CustomRenderSchemaType = string;
export interface RenderSchema {
  type:
    | BaseRenderSchemaType
    | MaterialRenderSchemaType
    | CustomRenderSchemaType;
}
export interface RenderProps {
  // schema结构
  schema: RenderSchema;
  // component type
  components: Record<BaseRenderComponentEnum, React.ComponentType<any>>;
  // custom component type
  customComponents: Record<string, React.ComponentType<any>>;
}

// 组件类型枚举
// 如果是自定义组件 则需要根据这个枚举来实现对应的自定义组件
export enum BaseRenderComponentEnum {
  Input = 'Input',
  InputNumber = 'InputNumber',
  Select = 'Select',
  DatePicker = 'DatePicker',
  TimePicker = 'TimePicker',
}
