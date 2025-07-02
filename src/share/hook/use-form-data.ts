import { useEffect, useState } from 'react';

type InputEventLike = {
  target: HTMLInputElement;
}

export const makeFormData = <T extends Record<string, unknown>>(init: T) => {
  return (update?: T) => {
    const [formData, setFormData] = useState<T>(init);

    useEffect(() => {
      if (!update) {
        return;
      }
      setFormData(update);
    }, [update]);

    // Note that is a curried function
    const makeFormChange = <K extends keyof T>(key: K) => (event: InputEventLike | boolean) => {
      if (!(key in init)) return;

      if (typeof event === "boolean") {
        setFormData((prev) => ({ ...prev, [key]: event }));
        return;
      }

      let newValue: T[K];

      if (event.target.type === "checkbox" || event.target.type === "radio") {
        newValue = event.target.checked as T[K];
      } else if (event.target.type === "file") {
        newValue = event.target.files?.[0] as T[K];
      } else if (event.target.type === "number" || typeof formData[key] === "number") {
        if (!/^\d+$/.test(event.target.value)) {
          return;
        }
        const casted = parseInt(event.target.value);
        newValue = isNaN(casted) ? formData[key] : (casted as T[K]);
      } else {
        newValue = event.target.value as T[K];
      }

      setFormData((prev) => ({ ...prev, [key]: newValue }));
    };

    const resetFormData = () => {
      setFormData(init);
    }

    const setFormValue = <K extends keyof T>(key: K, value: T[K]) => {
      if (key in init) {
        setFormData((prev) => ({ ...prev, [key]: value }));
      }
    }

    // Export a wrapped setFormData so that 1) ensure a new instance of formData is used 2) only update if key exist in init
    const setFormDataWrapped = (newFormData: T) => {
      const newObject = {
        ...formData,
      }
      for (const key in newFormData) {
        if (!(key in init)) continue;
        newObject[key] = newFormData[key];
      }
      setFormData(newObject);
    }

    return { formData, makeFormChange, resetFormData, setFormValue, setFormData: setFormDataWrapped };
  };
};
