import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

export function MarkdownRenderer({
  content,
  className,
}: {
  content: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'prose prose-sm max-w-none text-[var(--foreground)]',
        'prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[var(--foreground)]',
        'prose-p:text-[var(--foreground)] prose-p:leading-relaxed',
        'prose-strong:text-[var(--foreground)]',
        'prose-a:text-[var(--primary)] hover:prose-a:underline',
        'prose-code:rounded prose-code:bg-[var(--secondary)] prose-code:px-1 prose-code:py-0.5 prose-code:text-[0.9em] prose-code:before:content-none prose-code:after:content-none',
        'prose-pre:bg-[var(--secondary)] prose-pre:text-[var(--foreground)]',
        'prose-blockquote:border-l-[var(--primary)] prose-blockquote:text-[var(--muted-foreground)]',
        'prose-li:text-[var(--foreground)]',
        'prose-hr:border-[var(--border)]',
        className,
      )}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
