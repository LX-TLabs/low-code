import {
  MaterialRenderSchemaType,
  BaseRenderComponentEnum,
  RenderSchema,
  CustomRenderSchemaType,
  RenderSchemaType,
} from '../lib/render.d';

// TODO: 根据schema 类型 判断对应组件
export function traverseSchema(
  schema: RenderSchema
): RenderSchemaType {
  switch (schema.type) {
    case 'string':
      return BaseRenderComponentEnum.Input;
    case 'number':
      return BaseRenderComponentEnum.InputNumber;
    default:
      return schema.type as CustomRenderSchemaType;
  }
}