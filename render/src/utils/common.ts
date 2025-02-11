import { BaseRenderComponentEnum } from '../lib/render.d';

export function isBaseRenderComponentEnum(
  value: any
): value is BaseRenderComponentEnum {
  return Object.values(BaseRenderComponentEnum).includes(value);
}
