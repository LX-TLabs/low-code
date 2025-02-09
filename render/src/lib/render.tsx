import styles from './render.module.less';

import { RenderProps } from './render';
import { traverseSchema } from '../utils/traverseSchema';
export function Render(props: RenderProps) {
  const { schema, components } = props;
  const componentType = traverseSchema(schema);
  const Component = components[componentType];

  return (
    <div className={styles['container']}>
      <Component />
    </div>
  );
}

export default Render;
