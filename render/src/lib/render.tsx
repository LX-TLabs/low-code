import styles from './render.module.less';

import { BaseRenderComponentEnum, RenderProps } from './render';
import { traverseSchema } from '../utils/traverseSchema';
import { isBaseRenderComponentEnum } from '../utils/common';

export function Render(props: RenderProps) {
  const { schema, components, customComponents } = props;
  const componentType = traverseSchema(schema);
  let Component;
  // ts 类型保护
  if (isBaseRenderComponentEnum(componentType)) {
    Component = components[componentType];
  } else {
    Component = customComponents[componentType];
  }

  return (
    <div className={styles['container']}>
      <Component />
    </div>
  );
}

export default Render;
