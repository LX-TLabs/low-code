import styles from './render.module.less';
import React from 'react';

import {  RenderProps, RenderSchemaType } from './render.d';
import { traverseSchema } from '../utils/traverseSchema';
import { isBaseRenderComponentEnum } from '../utils/common';

export function Render(props: RenderProps) {
  const { schema, components, customComponents } = props;
  const componentType: RenderSchemaType = traverseSchema(schema);
  let Component;
  // ts 类型保护
  if (isBaseRenderComponentEnum(componentType)) {
    Component = components[componentType];
  } else {
    Component = customComponents?.[componentType];
    if (!Component) {
      throw new Error(`Component ${componentType} not found`);
    }
  }

  return (
    <div className={styles['container']}>
      <Component />
    </div>
  );
}

export default Render;
