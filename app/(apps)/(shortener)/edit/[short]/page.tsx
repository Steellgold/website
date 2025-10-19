"use client";

import { ShortenerNav } from "@/components/shortener-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, useForm, zodResolver } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { getShortLinkForEditAction, updateShortLinkAction } from "@/lib/actions/link-actions";
import { piano } from "@/lib/font";
import { cn } from "@/lib/utils";
import { CreateShortLinkForm, createShortLinkSchema } from "@/type/shortener";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState, useTransition } from "react";

type Props = {
  params: Promise<{ short: string }>
}

const EditPage = ({ params }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const { short } = use(params);
  const router = useRouter();

  const form = useForm<CreateShortLinkForm>({
    resolver: zodResolver(createShortLinkSchema),
    defaultValues: {
      type: "link",
      url: "",
      slug: "",
      password: "",
      expiresAt: "",
      title: "",
      content: "",
      banner: ""
    }
  });

  const watchType = form.watch("type");

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const result = await getShortLinkForEditAction(short);
        
        if (result.success && result.data) {
          const data = result.data;
          form.reset({
            type: data.type || "link",
            url: data.url || "",
            slug: short,
            password: "", // Ne pas pré-remplir le mot de passe pour la sécurité
            expiresAt: data.expiresAt ? new Date(data.expiresAt).toISOString().slice(0, 16) : "",
            title: data.title || "",
            content: data.content || "",
            banner: data.banner || ""
          });
        } else {
          setError(result.error || "Failed to load data");
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [short, form]);

  const onSubmit = (data: CreateShortLinkForm) =>
    startTransition(async () => {
      try {
        const result = await updateShortLinkAction(short, data);
        
        if (result.success) {
          router.push("/links");
        } else {
          form.setError("root", { message: result.error || "An error occurred" });
        }
      } catch (error) {
        console.error(error);
        form.setError("root", { message: "An error occurred" });
      }
    });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <ShortenerNav />
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            <p className="mt-4 text-neutral-300">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <ShortenerNav />
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-400">Error</CardTitle>
              <CardDescription>{error}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <ShortenerNav />

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div> 
            <h1 className={cn(piano.className, "text-5xl font-extrabold text-white")}>
              Edit {watchType === "link" ? "link" : "article"}
            </h1>
            <p className="text-neutral-300 mt-2 text-lg">
              Modify your existing {watchType === "link" ? "short link" : "article"}
            </p>
          </div>
        </div>

        <Card>
          <CardContent>
            <Form
              form={form}
              onSubmit={onSubmit}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="link" id="link" />
                          <label htmlFor="link" className="text-sm font-medium">Link</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="article" id="article" />
                          <label htmlFor="article" className="text-sm font-medium">Article</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {watchType === "link" && (
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
              )}

              {watchType === "article" && (
                <>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Article title *</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="My article title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Article content (Markdown) *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="# My Article

Write your content in **Markdown** format...

- List item 1
- List item 2

> Quote example"
                            className="min-h-[200px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <p className="text-sm text-neutral-400">
                          You can use Markdown formatting for rich text content
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="banner"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Banner image URL (optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://example.com/image.jpg"
                            {...field}
                          />
                        </FormControl>
                        <p className="text-sm text-neutral-400">
                          Optional banner image for your article
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom slug</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="custom-slug"
                        disabled
                        {...field}
                      />
                    </FormControl>
                    <p className="text-sm text-neutral-400">
                      Slug cannot be changed after creation
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
                      <Input type="password" placeholder="Leave empty to keep current password, or enter new one" {...field} />
                    </FormControl>
                    <p className="text-sm text-neutral-400">
                      Leave empty to keep current password protection settings
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
                      The content will be automatically deleted after this date
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

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/links")}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex-1"
                >
                  {isPending ? <Loader className="w-4 h-4 animate-spin" /> : "Update"}
                </Button>
              </div>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditPage;