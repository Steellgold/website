"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm, zodResolver } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/contexts/app-context";
import { createShortLinkAction } from "@/lib/actions/link-actions";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { CreateShortLinkForm, createShortLinkSchema } from "@/type/shortener";
import { Copy, CopyCheck, Loader } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useCopyToClipboard } from "usehooks-ts";

const NewShortLinkPage = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState<{
    short: string;
    url: string;
  } | null>(null);
  const { setIs404 } = useAppContext();

  const [isCopied, copy] = useCopyToClipboard();

  useEffect(() => {
    setIs404(true);
    return () => setIs404(false);
  }, [setIs404]);

  const form = useForm<CreateShortLinkForm>({
    resolver: zodResolver(createShortLinkSchema),
    defaultValues: {
      url: "",
      slug: "",
      password: "",
      expiresAt: ""
    }
  });

  const onSubmit = (data: CreateShortLinkForm) =>
    startTransition(async () => {
      try {
        const result = await createShortLinkAction(data);
        
        if (result.success && result.short) {
          setSuccess({ short: result.short, url: `${window.location.origin}/${result.short}` });
          form.reset();
        } else {
          form.setError("root", { message: result.error || "An error occurred" });
        }
      } catch (error) {
        console.error(error);
        form.setError("root", { message: "An error occurred" });
      }
    });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-2xl w-full space-y-3">
        <div className="text-center mb-6">
          <h1 className={cn(piano.className, "text-5xl font-extrabold text-white")}>
            Create a short link
          </h1>
          <p className="text-neutral-300 text-sm">
            Create short links with security and expiration options
          </p>
        </div>

        {success && (
          <div className="bg-[#1d1d1d] border-inside border-inside-default p-6">
            <h3 className={cn(piano.className, "text-2xl font-extrabold text-white")}>Yeaaah !</h3>
            <p className="text-sm text-neutral-300">Your short link has been created successfully</p>

            <div className="flex items-center gap-2 mt-4">
              <Input
                type="text"
                value={success.url}
                readOnly
                className="flex-1 bg-[#2d2d2d] border-inside border-inside-default text-white"
              />
              
              <Button onClick={() => copy(success.url)}>
                {isCopied ? <CopyCheck /> : <Copy />}
              </Button>
            </div>
          </div>
        )}

        <div className="bg-[#1d1d1d] p-6 border-inside border-inside-default">
          <Form
            form={form}
            onSubmit={onSubmit}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL to shorten *</FormLabel>
                  <FormControl>
                    <Input
                      type="url"
                      placeholder="https://example.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom slug (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="custom-slug"
                      {...field}
                    />
                  </FormControl>

                  <p className="text-sm text-neutral-400">
                    Leave empty to generate automatically. 3-20 characters, letters, numbers, dashes and underscores.
                  </p>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password (optional)</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Leave empty for no password" {...field} />
                  </FormControl>

                  <p className="text-sm text-neutral-400">
                    If defined, users will need to enter this password to access the link
                  </p>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expiresAt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration date (optional)</FormLabel>
                  <FormControl>
                    <Input type="datetime-local" {...field} />
                  </FormControl>

                  <p className="text-sm text-neutral-400">
                    The link will be automatically deleted after this date
                  </p>

                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.errors.root && (
              <div className="bg-red-900/20 border-inside border-inside-preferred rounded-md p-4">
                <p className="text-red-400 text-sm">{form.formState.errors.root.message}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? <Loader className="w-4 h-4 animate-spin" /> : "Create short link"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewShortLinkPage;