export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-semibold">
            MA
          </div>
          <span className="font-mono text-sm tracking-wide">mohammed.dev@</span>
        </div>
        <div className="hidden sm:flex items-center gap-8 font-mono text-sm text-muted">
          <a href="/" className="hover:opacity-70 transition-opacity">الرئيسية</a>
          <a href="/#about" className="hover:opacity-70 transition-opacity">من أنا</a>
          <a href="/#projects" className="hover:opacity-70 transition-opacity">المشاريع</a>
          <a href="/blog" className="hover:opacity-70 transition-opacity">المدونة</a>
          <a href="/#contact" className="hover:opacity-70 transition-opacity">تواصل</a>
        </div>
      </div>
    </nav>
  );
}