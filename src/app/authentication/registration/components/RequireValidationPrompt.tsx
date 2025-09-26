import React from "react";
import { Box } from '@mui/material';
import { Body, Title } from '@component/text';
import { BlockButton } from '@component/button/BlockButton';
import { useNavigate } from 'react-router';
import URLs from '@url';
import CardLayout from '@component/layout/card/CardLayout';

export const RequireValidationPrompt = () => {
  const navigate = useNavigate();

  return (
    <CardLayout isCentered={true} size={"sm"}>
      <Box px={2}>
        <Box mb={4} style={{ minHeight: 150 }}>
          <Title gutter={true}>
            Account Confirmation Required
          </Title>
          <Body gutter={true}>
            We’ve sent a confirmation email to the address you provided. Please open that email and click the link to verify your account.
          </Body>
          <Body gutter={true}>
            If you don’t see the email within a few minutes, check your spam or junk folder.
          </Body>
        </Box>
        <BlockButton onClick={() => navigate(URLs.authorize.login)}>
          Back
        </BlockButton>
      </Box>
    </CardLayout>
  )
}