import { useIdentityStore } from './store/use-identity.store';

export const useIdentity = () => {
  const { name, setName, isHost, setIsHost, hydrated } = useIdentityStore();
  return { name, setName, isHost, setIsHost, hydrated };
};
