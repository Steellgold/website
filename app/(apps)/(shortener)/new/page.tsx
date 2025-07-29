"use client";

import { ShortenerNav } from "@/components/shortener-nav";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm, zodResolver } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createShortLinkAction } from "@/lib/actions/link-actions";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { CreateShortLinkForm, createShortLinkSchema } from "@/type/shortener";
import { Copy, CopyCheck, Loader } from "lucide-react";
import { useState, useTransition } from "react";
import { useCopyToClipboard } from "usehooks-ts";

const LinksPage = () => {
  const [isPending, startTransition] = useTransition();
  const [isCopied, copy] = useCopyToClipboard();

  const [success, setSuccess] = useState<{
    short: string;
    url: string;
  } | null>(null);

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
    <div className="container mx-auto px-4 py-16">

      <ShortenerNav />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div> 
            <h1 className={cn(piano.className, "text-5xl font-extrabold text-white")}>
              Create a short link
            </h1>
            <p className="text-neutral-300 mt-2 text-lg">
              Create a new short link with a custom slug or let the system generate one for you
            </p>
          </div>
        </div>

        <Card>
          <CardHeader className={cn({ "sr-only": !success })}>
            <CardTitle>Short link created</CardTitle>
            <CardDescription>Your short link has been created successfully</CardDescription>

            <CardAction>
              <Button variant="outline" onClick={() => copy(success?.url || "")}>
                {isCopied ? <CopyCheck className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                Copy link
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent>
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
                <div className="bg-red-900/20 border-inside border-inside-preferred p-4">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LinksPage;