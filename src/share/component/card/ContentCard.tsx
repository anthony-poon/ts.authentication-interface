import React from 'react';
import { Card } from '@mui/material';

const ContentCard = (props: React.PropsWithChildren<{}>) => {
  return (
    <Card>
      { props.children }
    </Card>
  )
}

export default ContentCard;