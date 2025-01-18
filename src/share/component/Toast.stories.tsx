import Toast, { ToastProps } from './Toast';
import React, { useState } from 'react';
import { Button } from '@mui/material';

type TemplateArgs = {
  type: 'success' | 'warning' | 'error' ;
}

const Template = (args: TemplateArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Show Notification
      </Button>
      <Toast
        message={"Lorem Ipsum"}
        open={open}
        onClose={() => setOpen(false)}
        {...args}
      >
      </Toast>
    </div>
  );
};

export default {
  component: Toast,
  title: "Component/Toast",
  render: (args: TemplateArgs) => (
    <Template type={args.type}/>
  )
};

export const Default = Template.bind({});

export const Error = {
  args: {
    type: 'error',
  }
}