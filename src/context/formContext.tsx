import { createContext, useContext, useState } from 'react';

type FormData = {
  ind_pets: boolean | null;
  ind_apartment: boolean | null;
  size_code: number | null;
  experience_level_code: number | null;
  disponibility_level_code: number | null;
};

const defaultData: FormData = {
  ind_pets: null,
  ind_apartment: null,
  size_code: null,
  experience_level_code: null,
  disponibility_level_code: null,
};

const FormContext = createContext<{
  data: FormData;
  setField: (field: keyof FormData, value: any) => void;
}>({
  data: defaultData,
  setField: () => {},
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FormData>(defaultData);

  const setField = (field: keyof FormData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ data, setField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
