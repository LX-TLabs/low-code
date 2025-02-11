import {
  MaterialRenderSchemaType,
  BaseRenderComponentEnum,
  RenderSchema,
  CustomRenderSchemaType,
} from '../lib/render';

// TODO: 根据schema 类型 判断对应组件
export function traverseSchema(
  schema: RenderSchema
): BaseRenderComponentEnum | MaterialRenderSchemaType | CustomRenderSchemaType {
  if (schema.type === 'string') {
    return BaseRenderComponentEnum.Input;
  }
  if (schema.type === 'number') {
    return BaseRenderComponentEnum.InputNumber;
  }
  return schema.type as CustomRenderSchemaType;
}
