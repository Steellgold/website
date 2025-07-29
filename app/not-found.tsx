'use client';

import { useAppContext } from '@/contexts/app-context';
import { piano, piano_electric } from '@/lib/font';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
  const { setIs404 } = useAppContext();

  useEffect(() => {
    setIs404(true);
    return () => setIs404(false);
  }, [setIs404]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="mb-8">
        <h1 className={cn(
          "text-8xl sm:text-9xl font-bold text-white",
          piano_electric.className
        )}>
          404
        </h1>
      </div>

      <div className="max-w-md mb-2">
        <h2 className={cn("text-2xl sm:text-3xl font-bold", piano.className )}>
          Oops !
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          The page you are looking for does not exist.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
        <Link 
          href="/" 
          className="text-white underline flex flex-row items-center gap-2 hover:text-gray-300 transition-colors"
          prefetch
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;