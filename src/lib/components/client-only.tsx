"use client";

import { useState, useEffect, PropsWithChildren, ReactNode } from 'react';

type ClientOnlyProps = {
  fallback?: ReactNode;
} & PropsWithChildren;

export const ClientOnly: React.FC<ClientOnlyProps> = ({ children, fallback = null }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <>{children}</> : <>{fallback}</>;
};