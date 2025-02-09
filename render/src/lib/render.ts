// 基于阿里的pro-components 来设计
export interface RenderSchema {
  type: 'string' | 'number';
}
export interface RenderProps {
  // schema结构
  schema: RenderSchema;
  // component type
  components: Record<RenderComponentEnum, React.ComponentType<any>>;
}

// 组件类型枚举
// 如果是自定义组件 则需要根据这个枚举来实现对应的自定义组件
export enum RenderComponentEnum {
  Input = 'Input',
  InputNumber = 'InputNumber',
  Select = 'Select',
  DatePicker = 'DatePicker',
  TimePicker = 'TimePicker',
}
