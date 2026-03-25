export default function ResumeViewer() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted">
          View inline or download a copy for your records.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-200"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download PDF
        </a>
      </div>

      <div className="w-full h-[75vh] border border-border rounded-2xl overflow-hidden shadow-sm">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>

      <p className="mt-4 text-xs text-muted text-center">
        PDF not loading?{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Open in a new tab
        </a>
      </p>
    </div>
  );
}
