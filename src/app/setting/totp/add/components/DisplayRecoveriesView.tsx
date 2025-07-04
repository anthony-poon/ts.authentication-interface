import React from "react";
import { Box, Button, Typography } from '@mui/material';
import { Subtitle } from '@component/text';
import { useNavigate } from 'react-router';
import URLs from '@url';
import FormTitle from '@component/form/FormTitle';
import { BlockButton } from '@component/button/BlockButton';

type DisplayRecoveriesViewProps = {
  recoveries: string[]
}

export const DisplayRecoveriesView = (props: DisplayRecoveriesViewProps) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box mb={3}>
        <FormTitle>
          Add New Device
        </FormTitle>
        <Subtitle gutter={true}>
          Save these recovery codes in a safe place. You can use them to access your account if you lose access to your authenticator app.
        </Subtitle>
        <Subtitle>
          Each code can be used only once.
        </Subtitle>
      </Box>
      <Box borderRadius={1} py={2} px={2} mb={4} style={{ backgroundColor: "#F2F2F2" }}>
        {props.recoveries.map((recovery) => (
          <div key={recovery}>
            <Subtitle>{recovery}</Subtitle>
          </div>
        ))}
      </Box>
      <BlockButton onClick={() => navigate(URLs.setting.menu)}>
        Back to Setting
      </BlockButton>
    </Box>
  )
}