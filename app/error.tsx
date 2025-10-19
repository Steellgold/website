"use client";

import { Button } from '@/components/ui/button';
import { useAppContext } from '@/contexts/app-context';
import { piano, piano_electric } from '@/lib/font';
import { cn } from '@/lib/utils';
import { RefreshCcw } from 'lucide-react';
import { useEffect } from 'react';

type ErrorPageProps = {  
  error: Error & { digest?: string }
  reset: () => void
}

const ErrorPage = ({ reset }: ErrorPageProps) => {
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
          Oops !
        </h1>
      </div>

      <div className="max-w-md mb-2">
        <h2 className={cn("text-2xl sm:text-3xl font-bold", piano.className )}>
          Something went wrong!
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          An unexpected error has occurred. Please try again later.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
        <Button variant={"outline"}>
          <RefreshCcw size={16} />
          <span onClick={() => reset()}>Try again</span>
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;