import { ChangeEvent, useEffect, useState } from 'react';
import _ from 'lodash';

type InitFormData = {
  [key: string]: any;
}

// Merge 2 object only if key exist in target
const merge = (target: any, input: any) => {
  return _.assign(target, _.pick(input, _.keys(target)));
};

export const makeFormData = (init: InitFormData) => {
  return (update = {}) => {
    const [formData, setFormData] = useState({ ...init });
    const makeFormChange = (name: string) => {
      return (evt: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev,
          [name]: evt.target.value,
        }))
      }
    }
    update = merge(init, update);
    useEffect(() => {
      setFormData((prev) => ({
        ...prev,
        ...update,
      }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...Object.values(update)]);
    const hasChange = !_.isEqual(update, formData);
    const resetFormData = () => setFormData({ ...init });
    return { formData, makeFormChange, setFormData, resetFormData, hasChange };
  };
};