'use client';

import { useAppContext } from '@/contexts/app-context';
import Link from 'next/link';
import { useEffect } from 'react';
 
const NotFound = () => {
  const { setIs404 } = useAppContext();

  useEffect(() => {
    setIs404(true);
    return () => setIs404(false);
  }, [setIs404]);

  return (
    <div className="flex flex-col items-center justify-center relative h-screen">
      <h2 className="text-3xl font-bold">
        You&apos;re lost?
      </h2>

      <p className="mb-4">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="">
        Go back home
      </Link>
    </div>
  )
}

export default NotFound;