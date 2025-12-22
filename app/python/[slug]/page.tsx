import PythonRunner from "@/components/python-runner";
import { getPythonScript } from "@/lib/python-scripts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const code = await getPythonScript(slug);

  if (!code) {
    return {
      title: "Script not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Python Script - ${slug}`,
    description: "Execute Python code in your browser",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PythonScriptPage({ params }: PageProps) {
  const { slug } = await params;
  const code = await getPythonScript(slug);

  if (!code) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Python Script - {slug}</h1>
        </div>

        <PythonRunner code={code} />
      </div>
    </div>
  );
}
