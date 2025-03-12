import { FC } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Projeto2`.
 */
export type Projeto2Props = SliceComponentProps<Content.Projeto2Slice>;

/**
 * Component for "Projeto2" Slices.
 */
const Projeto2: FC<Projeto2Props> = ({ slice }) => (
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
  >
    Placeholder component for projeto2 (variation: {slice.variation}) Slices
  </section>
);

export default Projeto2;
