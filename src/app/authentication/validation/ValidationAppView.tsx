import React, { useCallback, useEffect } from 'react';
import { Authentication } from '@api/authentication';
import { setToast } from '@store/slice/notification';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import MountLoader from '@component/MountLoader';
import { Body, Title } from '@component/text';
import { BlockButton } from '@component/button/BlockButton';
import { Box } from '@mui/material';
import URLs from '@url';
import CardLayout from '@component/layout/card/CardLayout';

type ValidationAppProps = {
  authentication: typeof Authentication;
}

export const ValidationAppView = (props: ValidationAppProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams<{ token: string }>();

  const handleMount = async () => {
    try {
      if (!token) throw new Error('Invalid URL');
      await props.authentication.validate({ tokenValue: token });
      console.log(token);
    } catch (e) {
      dispatch(setToast(e));
      throw e;
    }
  }
  return (
    <CardLayout isCentered={true} size={"sm"}>
      <Box px={2}>
        <MountLoader onMount={handleMount}>
          <Box mb={3} style={{ minHeight: 150 }}>
            <Title gutter={true}>Account Confirmed</Title>
            <Body>
              Your email has been successfully verified. You can now sign in and start using your account.
            </Body>
          </Box>
          <BlockButton fullWidth={true} onClick={() => navigate(URLs.authorize.login)}>
            Login
          </BlockButton>
        </MountLoader>
      </Box>
    </CardLayout>
  )
}