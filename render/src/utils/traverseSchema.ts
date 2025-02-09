import { RenderComponentEnum, RenderSchema } from '../lib/render';

// TODO: 根据schema 类型 判断对应组件
export function traverseSchema(schema: RenderSchema): RenderComponentEnum {
  if (schema.type === 'string') {
    return RenderComponentEnum.Input;
  }
  if (schema.type === 'number') {
    return RenderComponentEnum.InputNumber;
  }
  return RenderComponentEnum.Input;
}
