import Link from "next/link";
import { FileJson, Home } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 via-blue-50 to-white text-slate-800 px-6 py-16">
      <div className="max-w-3xl mx-auto rounded-2xl border border-blue-100 bg-white/85 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">Admin</h1>
        <p className="text-slate-600 mb-8">
          Database integration has been removed. Portfolio content now comes from a local JSON file.
        </p>

        <div className="grid gap-4">
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
            <p className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
              <FileJson size={18} /> Data Source
            </p>
            <p className="text-sm text-blue-700/90">Update content in: src/data/portfolio.json</p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm hover:border-blue-400 hover:bg-blue-50 transition"
          >
            <Home size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
