import ContentCard from './ContentCard';
import React from "react";
export default {
  component: ContentCard,
  title: "Component/Content Card",
  args: {},
};

export const Default = {
  render: () => (
    <ContentCard>
      Lorem Ipsum
    </ContentCard>
  )
};