"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm, zodResolver } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/contexts/app-context";
import { verifyPasswordAction } from "@/lib/actions/link-actions";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Component } from "@/type/component";
import { VerifyPasswordForm, verifyPasswordSchema } from "@/type/shortener";
import { IconLoader } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useTransition } from "react";

type Props = {
  params: Promise<{ short: string }>
}

const PasswordPage: Component<Props> = ({ params }) => {
  const [isPending, startTransition] = useTransition();
  const { short } = use(params);
  const { setIs404 } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    setIs404(true);
    return () => setIs404(false);
  }, [setIs404]);

  const form = useForm<VerifyPasswordForm>({
    resolver: zodResolver(verifyPasswordSchema),
    defaultValues: {
      short,
      password: "",
    }
  });

  const onSubmit = (data: VerifyPasswordForm) =>
    startTransition(async () => {
      try {
        const result = await verifyPasswordAction(data);
        if (result.success) {
          if (result.type === "article") {
            router.push(`/${short}/view`);
          } else {
            router.push(result.url || "/");
          }
        } else {
          form.setError("password", { message: "Password is incorrect" });
        }
      } catch (error) {
        console.error(error);
        form.setError("password", { message: "An error occurred" });
      }
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div>
          <h2 className={cn(piano.className, "text-5xl font-extrabold text-white")}>Protected content</h2>
          <p className="text-sm text-neutral-300">This content is protected by a password</p>
        </div>
        
        <Form
          form={form}
          onSubmit={onSubmit}
          className="space-y-2"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter the password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? <IconLoader className="w-4 h-4 animate-spin" /> : "Access content"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PasswordPage;