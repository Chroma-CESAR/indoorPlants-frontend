import { Stack } from 'expo-router';
import { FormProvider } from '../context/formContext';

export default function Layout() {
  return (
    <FormProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </FormProvider>
  );
}
