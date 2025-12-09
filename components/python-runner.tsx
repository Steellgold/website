'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Play, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PythonRunnerProps {
  code: string;
}

export default function PythonRunner({ code }: PythonRunnerProps) {
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [needsInput, setNeedsInput] = useState(false);
  const [currentInput, setCurrentInput] = useState('');
  const [userInputs, setUserInputs] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (needsInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [needsInput]);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  async function runCode(inputs: string[] = []) {
    setIsRunning(true);
    setNeedsInput(false);

    try {
      const response = await fetch('/api/python/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, inputs }),
      });

      const data = await response.json();

      if (data.success || data.needsInput) {
        setOutput(data.output || []);

        if (data.needsInput) {
          setNeedsInput(true);
          setIsRunning(false);
        } else {
          setIsRunning(false);
          setUserInputs([]);
        }
      } else {
        setOutput([`❌ Erreur: ${data.error}`, ...(data.output || [])]);
        setIsRunning(false);
        setUserInputs([]);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setOutput([`❌ Erreur réseau: ${message}`]);
      setIsRunning(false);
      setUserInputs([]);
    }
  }

  function handleSubmitInput(e: React.FormEvent) {
    e.preventDefault();
    if (!currentInput.trim()) return;

    const newInputs = [...userInputs, currentInput];
    setUserInputs(newInputs);
    setCurrentInput('');
    runCode(newInputs);
  }

  function handleStart() {
    setOutput([]);
    setUserInputs([]);
    setCurrentInput('');
    runCode([]);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="order-2 lg:order-1">
        <div className="bg-gray-950 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-gray-800 h-full max-h-[600px] overflow-y-auto">
          <pre className="whitespace-pre-wrap wrap-break-word">{code}</pre>
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-4">
        {!isRunning && !needsInput && (
          <Button
            onClick={handleStart}
            className="w-full"
            size="lg"
          >
            <Play className="h-4 w-4" />
            Exécuter le code
          </Button>
        )}

        {output.length > 0 && (
          <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-sm border border-gray-800 max-h-[500px] overflow-y-auto">
            <div className="text-gray-500 mb-2 font-semibold">Sortie :</div>
            <div className="space-y-1">
              {output.map((line, i) => (
                <div key={i} className={line.startsWith('❌') ? 'text-red-400' : line.startsWith('⚠️') ? 'text-yellow-400' : ''}>
                  {line}
                </div>
              ))}
              <div ref={outputEndRef} />
            </div>
          </div>
        )}

        {needsInput && (
          <form onSubmit={handleSubmitInput} className="space-y-2">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Entrez votre réponse..."
                className="flex-1 bg-gray-950 border-gray-800 text-white"
                disabled={isRunning}
              />

              <Button
                type="submit"
                disabled={isRunning || !currentInput.trim()}
                size="icon"
              >
                {isRunning ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        )}

        {isRunning && !needsInput && (
          <div className="flex items-center justify-center text-muted-foreground text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            Executing code...
          </div>
        )}
      </div>
    </div>
  );
}
