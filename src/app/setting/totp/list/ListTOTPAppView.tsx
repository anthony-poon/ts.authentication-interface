import React, { useRef } from 'react';
import AppLayout from '../../../AppLayout';
import { ActionList } from '@component/list/ActionList';
import { ActionListHeader } from '@component/list/ActionListHeader';
import { GetTOTPResponse } from '@api/user/totp';
import MountLoader, { MountLoaderHandle } from '@component/MountLoader';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToast } from '@store/slice/notification';
import { IconClickAction } from '@component/list/IconClickAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { DateTime } from "luxon";
import { ActionButton } from '@component/button/ActionButton';
import { useNavigate } from 'react-router';
import { URLs } from '@url';
import { DefaultContainer } from '@component/layout/components/container/DefaultContainer';
import { Breadcrumb } from '@component/url/Breadcrumb';

type ListTOTPAppViewProps = {
  getDevices: () => Promise<GetTOTPResponse[]>;
  onDelete: (id: number) => Promise<void>;
}

const formatDate = (iso: string) => DateTime.fromISO(iso, { setZone: true }).toLocaleString(DateTime.DATE_SHORT)

const useOnMount = (props: ListTOTPAppViewProps) => {
  const dispatch = useDispatch();
  const [ devices, setDevices ] = useState<GetTOTPResponse[]>([]);
  const handleMount = async () => {
    try {
      const devices = await props.getDevices();
      setDevices(devices);
    } catch (e) {
      dispatch(setToast(e));
    }
  }
  return { devices, handleMount };
}

const useAction = (props: ListTOTPAppViewProps) => {
  const loaderRef = useRef<MountLoaderHandle>(null);
  const dispatch = useDispatch();
  const handleDelete = async (id: number) => {
    try {
      if (!confirm('Are you sure you want to delete it?')) {
        return;
      }
      await props.onDelete(id);
      loaderRef.current?.reload();
    } catch (e) {
      dispatch(setToast(e));
    }
  }
  return { loaderRef, handleDelete }
}

export const ListTOTPAppView = (props: ListTOTPAppViewProps) => {

  const navigate = useNavigate();
  const { devices, handleMount } = useOnMount(props);
  const { loaderRef, handleDelete } = useAction(props);
  return (
    <AppLayout>
      <DefaultContainer variant={"md"}>
        <Breadcrumb />
        <MountLoader ref={loaderRef} onMount={handleMount}>
          <ActionList>
            <ActionListHeader
              button={(
                <ActionButton size={"small"} onClick={() => navigate(URLs.setting_totp)}>
                  Add Device
                </ActionButton>
              )}
            >
              Registered Device
            </ActionListHeader>
            { devices.map((device) => (
              <IconClickAction
                key={device.id}
                onClick={() => handleDelete(device.id)}
                icon={<DeleteIcon/>}
                subtitle={`Created at ${formatDate(device.createdAt)}`}
              >
                { device.deviceName }
              </IconClickAction>
            )) }
          </ActionList>
        </MountLoader>
      </DefaultContainer>
    </AppLayout>
  )
}