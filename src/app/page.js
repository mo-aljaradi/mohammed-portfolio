import Link from "next/link";
import Nav from "./components/Nav";
import { getAllPosts } from "../lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Nav />

      <section id="home" className="max-w-5xl mx-auto px-6 pt-40 pb-24">
        <div className="font-mono text-xs tracking-widest text-muted mb-6">
          Software Engineer × AI Builder
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          مرحباً، أنا محمد الجرادي
        </h1>

        <p className="text-lg leading-relaxed max-w-xl mb-8 text-muted">
          طالب علوم حاسوب بالسنة الأخيرة، بابني تطبيقات ويب وديسكتوب متكاملة
          وبستكشف أدوات وAI Agents. بحب أشرح المفاهيم التقنية المعقّدة بلغة
          مبسّطة وواضحة، بدون تنازل عن الدقة العلمية.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {[
            "🤖 Software Engineer | AI Builder",
            "🎓 CS Student",
            "🌍 Dreaming Big",
            "💡 Too early to quit, too late to stop",
          ].map((badge) => (
            <span
              key={badge}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-line bg-card text-foreground"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-14">
          
          <a  href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-foreground text-background transition-transform hover:-translate-y-0.5"
          
           > شوف مشاريعي
          </a>
          
           <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm border border-foreground text-foreground transition-opacity hover:opacity-70"
          
           > تواصل معي
          </a>
        </div>

        <div className="font-mono text-sm text-muted">
          <a href="mailto:mohammedaljaradi709@gmail.com" className="hover:opacity-70 transition-opacity">
            mohammedaljaradi709@gmail.com
          </a>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          // about
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">من أنا</h2>

        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <p className="text-base leading-relaxed text-muted mb-6">
              طالب سنة أخيرة بعلوم الحاسوب في جامعة سبأ ريجن، وحاصل على شهادة
              CS50 من جامعة هارفارد. عندي خبرة عملية ببناء تطبيقات ويب
              وديسكتوب كاملة، سواء بشكل فردي أو ضمن فريق — من تطبيقات إدارة
              عملاء بـ C#، لمنصات ويب متكاملة بـ Laravel فيها دردشة لحظية
              بالـ WebSockets.
            </p>
            <p className="text-base leading-relaxed text-muted">
              قبل البرمجة، اشتغلت كمعلّم لغة إنجليزية لسنتين تقريباً — هاي
              التجربة علّمتني كيف أبسّط أفكار معقّدة لجمهور مختلف المستويات،
              وهاد بالضبط اللي بحاول أطبّقه لما بشرح مفاهيم تقنية.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "لغات البرمجة",
                items: ["C#", "C++", "Java", "PHP", "JavaScript"],
              },
              {
                title: "تطوير الويب",
                items: ["HTML5", "CSS3", "Laravel", "Node.js"],
              },
              {
                title: "قواعد البيانات",
                items: ["SQL", "Oracle Database", "MySQL"],
              },
              {
                title: "أدوات أخرى",
                items: ["Git", "WebSockets", "ICDL"],
              },
            ].map((group) => (
              <div key={group.title}>
                <div className="font-mono text-xs text-muted mb-2">{group.title}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 rounded-md bg-card border border-line"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          // projects
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">المشاريع</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Call Center Desktop Application",
              type: "مشروع فردي",
              stack: ["C#", "Oracle Database"],
              description:
                "تطبيق ديسكتوب لدعم عمليات مركز الاتصال — إدارة سجلات العملاء وأدوات تقارير لتتبع نشاط المركز.",
            },
            {
              title: "Scholarship Submission Platform",
              type: "تطبيق ويب",
              stack: ["HTML", "CSS", "JavaScript", "PHP"],
              description:
                "موقع لمكتب تعليمي لعرض المنح الدراسية المتاحة، وتمكين الطلاب من تصفح المنح والتواصل لبدء التقديم.",
            },
            {
              title: "Takharuj",
              type: "هاكاثون، مشروع جماعي",
              stack: ["Laravel", "MySQL", "Node.js", "WebSockets"],
              description:
                "منصة متكاملة لإدارة ومتابعة وتقييم مشاريع التخرج الجامعية، بلوحات تحكم مخصصة للكليات والأقسام والمشرفين والطلاب، مع دردشة لحظية.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-line bg-card"
            >
              <div className="font-mono text-xs text-muted mb-2">{project.type}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-1 rounded bg-background border border-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          // blog
        </div>
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">المدونة</h2>
          <Link
            href="/blog"
            className="font-mono text-sm hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            كل المقالات ←
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl border border-line bg-card transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted">{post.category}</span>
                <span className="font-mono text-xs text-muted">{post.date}</span>
              </div>
              <h3 className="text-base font-semibold leading-snug mb-2">{post.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 border-t border-line">
        <div className="font-mono text-xs tracking-widest text-muted mb-4">
          // contact
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">لنتواصل</h2>
        <p className="text-base leading-relaxed text-muted max-w-md mb-8">
          سواء عندك فكرة مشروع، فرصة تعاون، أو بس بدك تسلّم — إيميلي مفتوح
          دايماً.
        </p>
        
        <a  href="mailto:mohammedaljaradi709@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-foreground text-background transition-transform hover:-translate-y-0.5"
        
         > راسلني على الإيميل
        </a>
      </section>

       <footer className="border-t border-line">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
          <span>© 2026 محمد الجرادي</span>
          <span>Software Engineer × AI Builder</span>
        </div>
      </footer>
    </>
  );
}