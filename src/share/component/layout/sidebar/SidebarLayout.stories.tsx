import React from "react";
import SidebarLayout from '@component/layout/sidebar/SidebarLayout';
import { action } from '@storybook/addon-actions';

const MOCK_MENU = [
  {
    name: "Group 1",
    items: [
      {
        text: "Menu 1",
        onClick: () => action("onClick 1"),
      },
      {
        text: "Menu 2",
        onClick: () => action("onClick 2"),
      },
      {
        text: "Menu 3",
        onClick: () => action("onClick 3"),
      }
    ]
  },{
    items: [
      {
        text: "Menu 4",
        onClick: () => action("onClick 4"),
      },
      {
        text: "Menu 5",
        onClick: () => action("onClick 5"),
      },
      {
        text: "Menu 6",
        onClick: () => action("onClick 6"),
      }
    ]
  }
]

export default {
  parameters: {
    layout: "fullscreen",
  },
  component: SidebarLayout,
  title: "Component/Layout/Sidebar",
  args: {
    title: "Lorem Ipsum"
  },
};

export const Default = {
  render: (args: any) => (
    <SidebarLayout {...args} menus={MOCK_MENU}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod nisl ac massa volutpat luctus.
        Curabitur tincidunt dui sed gravida ornare. Pellentesque quis dolor commodo lacus consectetur volutpat. Donec
        vel ultricies augue. Donec tristique suscipit convallis. Mauris vel ullamcorper felis. Donec eleifend maximus
        turpis fringilla vestibulum. Curabitur eu luctus massa, ac aliquet ex. Maecenas nec erat facilisis, euismod
        ligula eu, ornare turpis. Phasellus vel purus ac est gravida ultricies at vitae felis. Sed feugiat et dolor
        interdum eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed in ante fringilla,
        imperdiet risus vitae, placerat ex. Nullam felis neque, tincidunt sit amet hendrerit vitae, lobortis sed
        nibh.</p>
      <p>Quisque at maximus purus. Nullam quis convallis libero, consectetur suscipit eros. Donec eget volutpat ex.
        Suspendisse commodo, lectus quis consectetur tempus, nulla lorem molestie urna, sed posuere lacus leo a augue.
        Donec quis feugiat purus. Integer est arcu, semper id suscipit placerat, pharetra scelerisque sapien. Donec
        consectetur vitae eros at porttitor. Nulla facilisi. Aliquam ultricies nisl elit, sit amet consectetur orci
        feugiat sed.</p>
      <p>Integer mollis quam vitae congue congue. Mauris congue ultricies est vel tincidunt. Praesent ac metus massa.
        Integer in egestas metus, vel pulvinar augue. Praesent ultricies dolor nec turpis venenatis ultricies. Quisque
        luctus feugiat cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis fermentum
        malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Ut et semper ipsum, sit amet volutpat neque.</p>
    </SidebarLayout>
  )
};