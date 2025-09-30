import React from 'react';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';

export default {
  component: DefaultContainer,
  title: 'Component/Layout/Component',
  args: {}
};

export const Container = {
  render: () => (
    <DefaultContainer>
      <p>Lorem Ipsum</p>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa odio, volutpat a leo id, sollicitudin sagittis
        ligula. Praesent eros urna, ultrices vel pulvinar sed, elementum sed dui. Phasellus fringilla odio id mi
        interdum, sed semper ante pretium. Cras iaculis sapien maximus luctus malesuada. Vivamus efficitur accumsan
        laoreet. Etiam aliquet dolor nibh, eu tincidunt nulla condimentum at. In sit amet sollicitudin ligula. Donec
        felis leo, sodales in nibh ac, euismod consectetur dui. Ut eget massa diam. Phasellus imperdiet gravida enim non
        pellentesque. Sed id dolor purus. Ut nec lacus sed turpis auctor maximus semper eget lacus. Nulla et volutpat
        nunc. Aliquam quam ex, ultrices in ante quis, pharetra consectetur arcu. In scelerisque nisi pulvinar ipsum
        varius, ac volutpat nulla scelerisque. Nulla facilisi.
      </div>
    </DefaultContainer>
  )
};