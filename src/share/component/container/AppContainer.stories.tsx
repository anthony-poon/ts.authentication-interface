import AppContainer from './AppContainer';
import React from "react";
export default {
  component: AppContainer,
  title: "Component/Container",
  args: {},
};

export const Default = {
  render: () => (
    <AppContainer>
      Lorem Ipsum
    </AppContainer>
  )
};