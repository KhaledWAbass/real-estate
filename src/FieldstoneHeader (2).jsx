import { useEffect, useRef, useState } from "react";
import {
  Home,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Star,
  Check,
} from "lucide-react";

const HERO_IMG =
  "data:image/webp;base64,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";

/* real photos pulled from Unsplash for gallery + testimonial avatars */
const unsplashImg = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const GALLERY_IMAGES = [
  unsplashImg("1573148868323-773b82c2f542"), // villa exterior with pool
  unsplashImg("1556911220-bff31c812dba"), // modern white kitchen
  unsplashImg("1583847268964-b28dc8f51f92"), // modern living room
  unsplashImg("1584622650111-993a426fbf0a"), // modern bathroom
  unsplashImg("1778164912282-c89de4d198ea"), // home under construction
  unsplashImg("1600489000022-c2086d79f9d4"), // kitchen cabinetry detail
  unsplashImg("1632829882891-5047ccc421bc"), // living room with fireplace
  unsplashImg("1631889993959-41b4e9c6e3c5"), // bathroom suite
];

const TESTIMONIAL_AVATARS = {
  omar: unsplashImg("1560250097-0b93528c311a", 200),
  sara: unsplashImg("1573496359142-b8d87734a5a2", 200),
  layan: unsplashImg("1611432579699-484f7990b127", 200),
  firas: unsplashImg("1500648767791-00dcc994a43e", 200),
};

function useLoaded(delay = 150) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return loaded;
}

/* scroll-triggered fade-in: attach `ref` to a section, use `revealed`
   to add an --in modifier class once the section enters the viewport */
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, revealed];
}

/* -------------------- ruler signature element -------------------- */

function Ruler({ active, ticks = 24 }) {
  return (
    <div
      className={`fs-ruler ${active ? "fs-ruler--active" : ""}`}
      aria-hidden="true"
    >
      <span className="fs-ruler__cap" />
      <div className="fs-ruler__track">
        {Array.from({ length: ticks }).map((_, i) => (
          <span
            key={i}
            className={`fs-ruler__tick ${i % 4 === 0 ? "fs-ruler__tick--major" : ""}`}
            style={{ transitionDelay: `${300 + i * 18}ms` }}
          />
        ))}
      </div>
      <span className="fs-ruler__cap" />
    </div>
  );
}

/* -------------------- header -------------------- */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "من نحن", href: "#about" },
    { label: "خطة العمل", href: "#process" },
    { label: "الخدمات", href: "#services" },
    { label: "معرض الأعمال", href: "#gallery" },
    { label: "الأسعار", href: "#plans" },
    { label: "تواصل", href: "#contact" },
  ];

  return (
    <header className={`fs-header ${scrolled ? "fs-header--solid" : ""}`}>
      <div className="fs-header__inner">
        <a href="#top" className="fs-logo">
          <span className="fs-logo__mark">
            <Home size={16} strokeWidth={2.25} />
          </span>
          فيلدستون
        </a>

        <nav className="fs-nav fs-nav--desktop">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="fs-nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="fs-btn fs-btn--primary fs-btn--desktop">
          احصل على عرض سعر <ArrowRight size={15} strokeWidth={2.25} />
        </a>

        <button
          className="fs-burger"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`fs-mobile ${open ? "fs-mobile--open" : ""}`}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="fs-mobile__link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="fs-btn fs-btn--primary"
          onClick={() => setOpen(false)}
        >
          احصل على عرض سعر <ArrowRight size={15} strokeWidth={2.25} />
        </a>
      </div>
    </header>
  );
}

/* -------------------- hero -------------------- */

function Hero() {
  const loaded = useLoaded(150);
  const words = "نبني منازل تقف بثبات".split(" ");

  return (
    <section id="top" className="fs-hero">
      <div className={`fs-hero__img ${loaded ? "fs-hero__img--in" : ""}`}>
        <img src={HERO_IMG} alt="فيلا بيضاء حديثة مع مسبح وحديقة" />
        <div className="fs-hero__scrim" />
      </div>

      <div className="fs-hero__corner fs-hero__corner--tl" />
      <div className="fs-hero__corner fs-hero__corner--tr" />
      <div className="fs-hero__corner fs-hero__corner--bl" />
      <div className="fs-hero__corner fs-hero__corner--br" />

      <div className="fs-hero__content">
        <div
          className={`fs-eyebrow ${loaded ? "fs-in" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <span className="fs-eyebrow__dot" />
          بناء منازل مخصصة — منذ 2011
        </div>

        <h1 className="fs-hero__title">
          {words.map((w, i) => (
            <span className="fs-hero__wordwrap" key={i}>
              <span
                className={`fs-hero__word ${loaded ? "fs-hero__word--in" : ""}`}
                style={{ transitionDelay: `${260 + i * 70}ms` }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <p
          className={`fs-hero__sub ${loaded ? "fs-in" : ""}`}
          style={{ transitionDelay: "780ms" }}
        >
          تصمم فيلدستون وتبني منازل مخصصة في المنطقة — من أول مخطط إلى الجولة
          النهائية، كل قياس له أهمية.
        </p>

        <div
          className={`fs-hero__ctas ${loaded ? "fs-in" : ""}`}
          style={{ transitionDelay: "900ms" }}
        >
          <a href="#contact" className="fs-btn fs-btn--primary">
            ابدأ البناء <ArrowRight size={15} strokeWidth={2.25} />
          </a>
          <a href="#العمل" className="fs-btn fs-btn--ghost">
            عرض أعمالنا
          </a>
        </div>

        <Ruler active={loaded} />
      </div>

      <div className="fs-hero__stat">
        <span className="fs-hero__stat-num">180+</span>
        <span className="fs-hero__stat-label">
          منازل مكتملة
          <br />
          منذ 2011
        </span>
      </div>

      <div
        className={`fs-hero__scrollcue ${loaded ? "fs-in" : ""}`}
        style={{ transitionDelay: "1100ms" }}
      >
        <span className="fs-hero__scrollcue-line" />
        مرر
      </div>
    </section>
  );
}

/* -------------------- content -------------------- */

const ABOUT_ITEMS = [
  {
    icon: "◆",
    title: "جودة الحرفية",
    desc: "نقدم أعمال بناء عالية الجودة مع اهتمام بالتفاصيل والمواد الممتازة لضمان متانة وجمال المنازل.",
  },
  {
    icon: "◇",
    title: "خيارات التخصيص",
    desc: "نوفر حلولاً قابلة للتخصيص لتلبية احتياجات كل عميل من حيث التصميم والمساحة والميزات الخاصة.",
  },
  {
    icon: "◆",
    title: "الإنجاز في الوقت المحدد",
    desc: "نلتزم بالجداول الزمنية للمشاريع ونضمن إتمام الأعمال بكفاءة ومهنية وفقاً للمعايير المتفق عليها.",
  },
];

function Content() {
  const [ref, revealed] = useReveal();

  return (
    <section id="about" ref={ref} className="fs-content">
      <div className="fs-content__inner">
        <div
          className={`fs-content__intro ${revealed ? "fs-content__intro--in" : ""}`}
        >
          <span className="fs-content__eyebrow">Why Choose Us</span>
          <h2 className="fs-content__heading">
            Elevating Home Construction Standards
          </h2>
        </div>

        <div className="fs-content__grid">
          {ABOUT_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`fs-content__item ${revealed ? "fs-content__item--in" : ""}`}
              style={{ transitionDelay: `${120 + i * 110}ms` }}
            >
              <div className="fs-content__icon">
                <span className="fs-content__icon-symbol">{item.icon}</span>
              </div>
              <h3 className="fs-content__title">{item.title}</h3>
              <p className="fs-content__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- process / plan -------------------- */

const PROCESS_STEPS = [
  {
    n: "01",
    title: "الاستشارة",
    desc: "نستمع إلى فكرتك ونحدد الميزانية والجدول الزمني المناسب لمشروعك.",
  },
  {
    n: "02",
    title: "التصميم",
    desc: "نحوّل رؤيتك إلى مخططات معمارية مفصّلة وموافقات جاهزة للتنفيذ.",
  },
  {
    n: "03",
    title: "البناء",
    desc: "فريقنا الحرفي ينفّذ كل مرحلة بدقة عالية والتزام كامل بالجودة.",
  },
  {
    n: "04",
    title: "التسليم",
    desc: "جولة تفقّد نهائية، ثم نسلّمك مفاتيح منزلك الجديد جاهزًا للسكن.",
  },
];

function Process() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="process"
      ref={ref}
      className="fs-section fs-section--dark fs-process"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <span className="fs-section__eyebrow">خطة العمل</span>
          <h2 className="fs-section__title">كيف نعمل معك</h2>
          <p className="fs-section__lead">
            من أول لقاء إلى تسليم المفاتيح، نتبع منهجية واضحة تبقيك مطّلعًا على
            كل خطوة من مشروعك.
          </p>
        </div>

        <div className="fs-process__grid">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.n}
              className={`fs-process__step ${revealed ? "fs-process__step--in" : ""}`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <div className="fs-process__num">{step.n}</div>
              <h3 className="fs-process__title">{step.title}</h3>
              <p className="fs-process__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- services -------------------- */

const SERVICE_ITEMS = [
  {
    icon: "◆",
    name: "تصميم المنازل المخصصة",
    desc: "خدمات تصميم معمارية وداخلية مخصصة لتتناسب مع نمط حياتك وظروف موقعك.",
  },
  {
    icon: "◇",
    name: "بناء المنازل",
    desc: "خدمة متكاملة للبناء تبدأ من تجهيز الموقع والأساس وحتى التشطيب والتسليم.",
  },
  {
    icon: "◈",
    name: "التجديدات والإضافات",
    desc: "إعادة تطوير وامتدادات تحسن الوظائف وتزيد من قيمة العقار.",
  },
  {
    icon: "◇",
    name: "المطابخ والحمامات",
    desc: "تصميم وتركيب مطابخ وحمامات حديثة وفعالة.",
  },
];

function Services() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="fs-section fs-section--light fs-services"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <div className="fs-section__eyebrow">خدماتنا</div>
          <h2 className="fs-section__title">ما نقدمه</h2>
          <p className="fs-section__lead">
            من تصميم المنازل المخصصة إلى التجديدات الشاملة، نقدم مجموعة كاملة من
            خدمات البناء والتجديد لتحويل رؤيتك إلى واقع.
          </p>
        </div>

        <div className="fs-services__grid">
          {SERVICE_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className={`fs-services__item ${revealed ? "fs-services__item--in" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="fs-services__icon">{item.icon}</div>
              <h3 className="fs-services__name">{item.name}</h3>
              <p className="fs-services__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- gallery / our work -------------------- */
function Gallery() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      className="fs-section fs-section--dark fs-gallery"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <div className="fs-section__eyebrow">أعمالنا</div>
          <h2 className="fs-section__title">معرض المشاريع</h2>
          <p className="fs-section__lead">
            نماذج مختارة من منازلنا المكتملة تظهر النهج والتفاصيل الحرفية لدينا.
          </p>
        </div>

        <div className="fs-gallery__grid">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`fs-gallery__item ${revealed ? "fs-gallery__item--in" : ""}`}
              style={{ transitionDelay: `${(i % 4) * 90}ms` }}
            >
              <img src={src} alt={`مشروع ${i + 1}`} />
              <span className="fs-gallery__item-tag">
                مشروع {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- reviews / testimonials -------------------- */

const TESTIMONIALS = [
  {
    name: "سارة الأحمد",
    role: "صاحبة منزل — حي النخيل",
    avatar: TESTIMONIAL_AVATARS.sara,
    quote:
      "فريق فيلدستون حوّل فكرتنا إلى منزل حقيقي بجودة تفوق التوقعات، والتزموا بالجدول الزمني بدقة.",
  },
  {
    name: "عمر خالد",
    role: "مالك فيلا — مشروع 04",
    avatar: TESTIMONIAL_AVATARS.omar,
    quote:
      "التواصل كان واضحًا في كل مرحلة، ولم نشعر بأي مفاجآت في الميزانية أو التسليم.",
  },
  {
    name: "ليان يوسف",
    role: "تجديد مطبخ وحمام",
    avatar: TESTIMONIAL_AVATARS.layan,
    quote:
      "الحرفية في التفاصيل كانت لافتة، خصوصًا في تجديد المطبخ. أنصح بهم لأي مشروع بناء.",
  },
  {
    name: "فراس ناصر",
    role: "صاحب مشروع تجاري صغير",
    avatar: TESTIMONIAL_AVATARS.firas,
    quote:
      "احترافية عالية وسرعة في التنفيذ دون التضحية بالجودة. تجربة ممتازة من البداية للنهاية.",
  },
];

function Reviews() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="reviews"
      ref={ref}
      className="fs-section fs-section--light fs-reviews"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <span className="fs-section__eyebrow">آراء العملاء</span>
          <h2 className="fs-section__title">ماذا يقول عملاؤنا</h2>
          <p className="fs-section__lead">
            تجارب حقيقية من عملاء بنينا وجدّدنا منازلهم معهم.
          </p>
        </div>

        <div className="fs-testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`fs-testimonial ${revealed ? "fs-testimonial--in" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="fs-testimonial__stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="fs-testimonial__quote">"{t.quote}"</p>
              <div className="fs-testimonial__person">
                <img
                  className="fs-testimonial__avatar"
                  src={t.avatar}
                  alt={t.name}
                />
                <div>
                  <p className="fs-testimonial__name">{t.name}</p>
                  <p className="fs-testimonial__role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- subscription plans -------------------- */

const PLANS = [
  {
    name: "الأساسية",
    price: "49",
    features: [
      "فحص دوري نصف سنوي للمنزل",
      "دعم عبر الهاتف خلال أوقات الدوام",
      "تقرير حالة سنوي مفصّل",
    ],
    featured: false,
  },
  {
    name: "الاحترافية",
    price: "99",
    features: [
      "كل مزايا الباقة الأساسية",
      "صيانة ربع سنوية شاملة",
      "أولوية في الجدولة والاستجابة",
      "خصم 10% على أعمال الترميم",
    ],
    featured: true,
  },
  {
    name: "المميزة",
    price: "199",
    features: [
      "كل مزايا الباقة الاحترافية",
      "صيانة شهرية ومتابعة مستمرة",
      "مدير مشروع مخصص لمنزلك",
      "خصم 20% على جميع الخدمات",
    ],
    featured: false,
  },
];

function Plans() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="plans"
      ref={ref}
      className="fs-section fs-section--dark fs-plans"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <span className="fs-section__eyebrow">خطط الاشتراك</span>
          <h2 className="fs-section__title">باقات صيانة تناسب منزلك</h2>
          <p className="fs-section__lead">
            اشترك في إحدى باقاتنا لمتابعة دورية واهتمام مستمر بمنزلك بعد
            التسليم.
          </p>
        </div>

        <div className="fs-plans__grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`fs-plans__card ${plan.featured ? "fs-plans__card--featured" : ""} ${revealed ? "fs-plans__card--in" : ""}`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {plan.featured && (
                <span className="fs-plans__badge">الأكثر طلبًا</span>
              )}
              <h3 className="fs-plans__name">{plan.name}</h3>
              <div className="fs-plans__price">
                <span className="fs-plans__price-num">${plan.price}</span>
                <span className="fs-plans__price-period">/ شهريًا</span>
              </div>
              <ul className="fs-plans__list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} className="fs-plans__check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`fs-btn ${plan.featured ? "fs-btn--primary" : "fs-btn--ghost"}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                اشترك الآن
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- contact -------------------- */
function Contact() {
  const [ref, revealed] = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="fs-section fs-section--light fs-contact"
    >
      <div className="fs-section__inner">
        <div className="fs-section__head">
          <span className="fs-section__eyebrow">تواصل معنا</span>
          <h2 className="fs-section__title">لنبدأ بناء منزلك</h2>
          <p className="fs-section__lead">
            راسلنا اليوم لتحديد موعد استشارة مجانية مع فريقنا.
          </p>
        </div>

        <div className="fs-contact__grid">
          <div
            className={`fs-contact__info ${revealed ? "fs-contact__info--in" : ""}`}
          >
            <div className="fs-contact__row">
              <span className="fs-contact__row-icon">
                <MapPin size={18} strokeWidth={2} />
              </span>
              <div>
                <h4>العنوان</h4>
                <p>1234 الشارع الرئيسي، أي مدينة</p>
              </div>
            </div>
            <div className="fs-contact__row">
              <span className="fs-contact__row-icon">
                <Phone size={18} strokeWidth={2} />
              </span>
              <div>
                <h4>الهاتف</h4>
                <a href="tel:+13330000000">+1 (333) 000-0000</a>
              </div>
            </div>
            <div className="fs-contact__row">
              <span className="fs-contact__row-icon">
                <Mail size={18} strokeWidth={2} />
              </span>
              <div>
                <h4>البريد الإلكتروني</h4>
                <a href="mailto:hi@kombong.com">hi@kombong.com</a>
              </div>
            </div>
          </div>

          <form
            className={`fs-contact__form ${revealed ? "fs-contact__form--in" : ""}`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="fs-contact__field">
              <label htmlFor="fs-name">الاسم</label>
              <input id="fs-name" type="text" placeholder="اسمك الكامل" />
            </div>
            <div className="fs-contact__field">
              <label htmlFor="fs-email">البريد الإلكتروني</label>
              <input id="fs-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="fs-contact__field">
              <label htmlFor="fs-message">الرسالة</label>
              <textarea
                id="fs-message"
                rows={4}
                placeholder="أخبرنا عن مشروعك"
              />
            </div>
            <button
              type="submit"
              className="fs-btn fs-btn--primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              إرسال الرسالة <ArrowRight size={15} strokeWidth={2.25} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Footer -------------------- */

function Footer() {
  return (
    <footer className="fs-footer" style={{ color: "var(--paper)" }}>
      <div className="fs-footer__inner">
        <div className="fs-footer__col fs-footer__brand">
          <div className="fs-logo">
            <div className="fs-logo__mark">◆</div>
            <div>
              <div className="fs-logo__name">فيلدستون</div>
              <div className="fs-logo__tag">مقاول بناء المنازل</div>
            </div>
          </div>
          <p className="fs-footer__desc">
            نحن في فيلدستون ملتزمون بتقديم أعلى مستويات الجودة في تصميم وبناء
            المنازل المخصصة، مع التركيز على التفاصيل والحرفية.
          </p>
        </div>

        <div className="fs-footer__col">
          <h4>الخدمات</h4>
          <ul className="fs-footer__list">
            <li>تصميم المنازل المخصصة</li>
            <li>بناء المنازل</li>
            <li>التجديدات والإضافات</li>
            <li>إعادة تجهيز المطابخ</li>
          </ul>
        </div>

        <div className="fs-footer__col">
          <h4>معلومات التواصل</h4>
          <p className="fs-footer__meta">
            العنوان: 1234 الشارع الرئيسي، أي مدينة, الولايات المتحدة 12345
          </p>
          <p className="fs-footer__meta">
            الهاتف: <a href="tel:+13330000000">+1 (333) 000-0000</a>
          </p>
          <p className="fs-footer__meta">
            <a href="mailto:hi@kombong.com">hi@kombong.com</a>
          </p>
        </div>

        <div className="fs-footer__col fs-footer__newsletter">
          <h4>النشرة البريدية</h4>
          <p className="fs-footer__meta">
            اشترك في نشرتنا البريدية لتبقى على اطلاع بأحدث الأخبار, النصائح,
            والاتجاهات في الصناعة
          </p>
          <form className="fs-newsletter" onSubmit={(e) => e.preventDefault()}>
            <input
              className="fs-newsletter__input"
              placeholder="Your Email"
              aria-label="Your Email"
            />
            <button className="fs-newsletter__btn" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>
      <div className="fs-footer__bar">
        <div>حقوق الطبع © 2024 Kombong</div>
        <div>تم التصميم بواسطة TokoTema</div>
      </div>
    </footer>
  );
}

/* -------------------- root -------------------- */

export default function FieldstoneHeaderHero() {
  return (
    <div className="fs-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Space+Grotesk:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

        .fs-root {
          --ink: #10201d;
          --paper: #f5f1e6;
          --signal: #d7ff4a;
          --clay: #c17a4e;
          --line-light: rgba(245,241,230,0.18);
          font-family: 'Space Grotesk', sans-serif;
          background: var(--ink);
          min-height: 100vh;
          overflow-x: hidden;
        }
        .fs-root * { box-sizing: border-box; }
        .fs-root a { text-decoration: none; color: inherit; }
        .fs-root img { display: block; width: 100%; height: 100%; object-fit: cover; }

        .fs-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500; font-size: 14.5px;
          padding: 14px 22px; border-radius: 999px;
          border: 1px solid transparent;
          transition: transform .35s cubic-bezier(.2,.8,.2,1), border-color .25s;
          white-space: nowrap;
        }
        .fs-btn--primary { background: var(--signal); color: #16220f; }
        .fs-btn--primary:hover { transform: translateY(-2px); }
        .fs-btn--ghost { border-color: rgba(255,255,255,0.55); color: var(--paper); }
        .fs-btn--ghost:hover { border-color: var(--paper); transform: translateY(-2px); }

        /* unified fade in/out animation using site colors */
        .fs-in { opacity: 1 !important; transform: none !important; animation: fs-fade-in .6s cubic-bezier(.2,.8,.2,1) both; }
        .fs-out { opacity: 0 !important; transform: translateY(8px) !important; animation: fs-fade-out .45s ease both; }

        @keyframes fs-fade-in {
          0% { opacity: 0; transform: translateY(10px); filter: drop-shadow(0 6px 18px rgba(0,0,0,0.55)); }
          60% { opacity: 1; transform: translateY(0); }
          100% { opacity: 1; transform: none; }
        }

        @keyframes fs-fade-out {
          0% { opacity: 1; transform: none; }
          100% { opacity: 0; transform: translateY(10px); }
        }

        /* header */
        .fs-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: background .4s ease, backdrop-filter .4s ease, border-color .4s ease, padding .4s ease;
          padding: 22px 0;
        }
        .fs-header--solid {
          background: rgba(16,32,29,0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line-light);
          padding: 14px 0;
        }
        .fs-header__inner {
          max-width: 1240px; margin: 0 auto; padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .fs-logo {
          display: flex; align-items: center; gap: 9px;
          font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px;
          color: var(--paper); letter-spacing: -0.01em;
        }
        .fs-logo__mark {
          width: 30px; height: 30px; border-radius: 50%;
          background: var(--signal); color: #16220f;
          display: flex; align-items: center; justify-content: center;
        }
        .fs-nav--desktop { display: flex; gap: 34px; }
        .fs-nav__link { font-size: 14px; color: rgba(245,241,230,0.82); position: relative; padding-bottom: 3px; transition: color .25s; }
        .fs-nav__link:hover { color: var(--paper); }
        .fs-nav__link::after { content:''; position:absolute; left:0; bottom:0; height:1px; width:0; background: var(--signal); transition: width .3s ease; }
        .fs-nav__link:hover::after { width: 100%; }
        .fs-btn--desktop { display: inline-flex; }
        .fs-burger { display: none; background: none; border: none; color: var(--paper); cursor: pointer; }
        .fs-mobile { max-height: 0; overflow: hidden; transition: max-height .4s ease; display: flex; flex-direction: column; gap: 4px; padding: 0 24px; }
        .fs-mobile--open { max-height: 320px; padding: 18px 24px 22px; }
        .fs-mobile__link { color: var(--paper); padding: 10px 0; font-size: 15px; border-bottom: 1px solid var(--line-light); }

        @media (max-width: 860px) {
          .fs-nav--desktop, .fs-btn--desktop { display: none; }
          .fs-burger { display: block; }
        }

        /* hero */
        .fs-hero { position: relative; min-height: 100vh; display: flex; align-items: flex-end; overflow: hidden; background: var(--ink); }
        .fs-hero__img { position: absolute; inset: 0; transform: scale(1.12); opacity: 0; transition: transform 2.4s cubic-bezier(.2,.7,.2,1), opacity 1.4s ease; }
        .fs-hero__img--in { transform: scale(1); opacity: 1; }
        .fs-hero__scrim {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(16,32,29,0.15) 0%, rgba(16,32,29,0.1) 30%, rgba(16,32,29,0.92) 100%),
                      linear-gradient(90deg, rgba(16,32,29,0.55) 0%, rgba(16,32,29,0.02) 48%);
        }
        .fs-hero__corner { position: absolute; width: 26px; height: 26px; z-index: 2; opacity: .85; }
        .fs-hero__corner--tl { top: 96px; left: 24px; border-top: 1.5px solid var(--signal); border-left: 1.5px solid var(--signal); }
        .fs-hero__corner--tr { top: 96px; right: 24px; border-top: 1.5px solid var(--signal); border-right: 1.5px solid var(--signal); }
        .fs-hero__corner--bl { bottom: 24px; left: 24px; border-bottom: 1.5px solid rgba(245,241,230,0.5); border-left: 1.5px solid rgba(245,241,230,0.5); }
        .fs-hero__corner--br { bottom: 24px; right: 24px; border-bottom: 1.5px solid rgba(245,241,230,0.5); border-right: 1.5px solid rgba(245,241,230,0.5); }

        .fs-hero__content { position: relative; z-index: 3; max-width: 1240px; margin: 0 auto; width: 100%; padding: 0 24px 88px; color: var(--paper); }
        .fs-eyebrow {
          font-family: 'Space Mono', monospace; font-size: 12.5px; letter-spacing: .1em; text-transform: uppercase;
          display: inline-flex; align-items: center; gap: 8px; margin-bottom: 22px; color: rgba(245,241,230,0.9);
          opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease;
          text-shadow: 0 1px 8px rgba(0,0,0,0.35);
        }
        .fs-eyebrow__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--signal); }
        .fs-hero__title {
          font-family: 'Fraunces', serif; font-weight: 500;
          font-size: clamp(38px, 6.4vw, 78px); line-height: 1.04; letter-spacing: -0.015em;
          margin: 0 0 26px; max-width: 15ch;
          text-shadow: 0 4px 24px rgba(0,0,0,0.35);
        }
        .fs-hero__wordwrap { display: inline-block; overflow: hidden; vertical-align: top; margin-right: 0.28em; }
        .fs-hero__word { display: inline-block; transform: translateY(105%); transition: transform .8s cubic-bezier(.2,.8,.2,1); }
        .fs-hero__word--in { transform: translateY(0); }
        .fs-hero__sub {
          max-width: 46ch; font-size: 16.5px; line-height: 1.6; color: rgba(245,241,230,0.92); margin-bottom: 34px;
          opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .fs-hero__ctas {
          display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 46px;
          opacity: 0; transform: translateY(14px); transition: opacity .7s ease, transform .7s ease;
        }

        .fs-hero__stat {
          position: absolute; z-index: 3; top: 106px; right: 24px; text-align: right;
          color: var(--paper); display: flex; flex-direction: column; align-items: flex-end;
          text-shadow: 0 2px 10px rgba(0,0,0,0.35);
        }
        .fs-hero__stat-num { font-family: 'Fraunces', serif; font-size: 30px; font-weight: 500; }
        .fs-hero__stat-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .04em; opacity: .9; margin-top: 4px; line-height: 1.4; }
        @media (max-width: 640px) { .fs-hero__stat { display: none; } }

        .fs-hero__scrollcue {
          position: absolute; z-index: 3; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(6px);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace; font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase;
          color: rgba(245,241,230,0.75); opacity: 0; transition: opacity .7s ease, transform .7s ease;
        }
        .fs-hero__scrollcue-line { width: 1px; height: 26px; background: linear-gradient(180deg, var(--signal), transparent); animation: fs-cue 1.8s ease-in-out infinite; }
        @keyframes fs-cue { 0%,100% { transform: scaleY(1); opacity: .5; } 50% { transform: scaleY(1.3); opacity: 1; } }

        /* ruler */
        .fs-ruler { display: flex; align-items: center; gap: 8px; max-width: 460px; }
        .fs-ruler__cap { width: 5px; height: 5px; border-radius: 50%; background: var(--signal); flex-shrink: 0; }
        .fs-ruler__track { flex: 1; display: flex; align-items: flex-end; gap: 6px; height: 16px; overflow: hidden; }
        .fs-ruler__tick { width: 1px; height: 6px; background: rgba(245,241,230,0.45); flex-shrink: 0; transform: scaleY(0); transform-origin: bottom; transition: transform .35s ease; }
        .fs-ruler__tick--major { height: 12px; background: var(--signal); }
        .fs-ruler--active .fs-ruler__tick { transform: scaleY(1); }

        @media (max-width: 640px) {
          .fs-hero__content { padding-bottom: 64px; }
        }

        /* content */
        .fs-content {
          background: var(--paper);
          padding: 88px 24px;
          color: var(--ink);
        }
        .fs-content__inner {
          max-width: 1240px; margin: 0 auto;
        }
        .fs-content__intro {
          max-width: 640px; margin: 0 0 52px;
          opacity: 0; transform: translateY(20px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .fs-content__intro--in { opacity: 1; transform: none; }
        .fs-content__eyebrow {
          display: inline-block; font-family: 'Space Mono', monospace;
          font-size: 12.5px; letter-spacing: .14em; text-transform: uppercase;
          color: var(--clay); margin-bottom: 14px;
        }
        .fs-content__heading {
          font-family: 'Fraunces', serif; font-weight: 500;
          font-size: clamp(28px, 3.4vw, 40px); line-height: 1.15;
          margin: 0; letter-spacing: -0.01em; color: var(--ink);
        }
        .fs-content__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 36px;
        }
        .fs-content__item {
          display: flex; flex-direction: column; gap: 18px;
          opacity: 0; transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease;
          padding: 2px;
        }
        .fs-content__item--in { opacity: 1; transform: translateY(0); }
        .fs-content__icon {
          width: 56px; height: 56px;
          background: rgba(199, 122, 78, 0.12); border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .fs-content__icon-symbol {
          font-size: 28px; color: var(--clay);
          line-height: 1;
        }
        .fs-content__title {
          font-family: 'Fraunces', serif;
          font-weight: 600; font-size: 22px; line-height: 1.3;
          margin: 0; letter-spacing: -0.01em;
          color: var(--ink);
        }
        .fs-content__desc {
          font-size: 15px; line-height: 1.7;
          color: rgba(16, 32, 29, 0.74); margin: 0;
        }

        /* shared section shell used by process / services / gallery / contact */
        .fs-section { padding: 100px 24px; position: relative; overflow: hidden; }
        .fs-section--light { background: var(--paper); color: var(--ink); }
        .fs-section--dark { background: linear-gradient(180deg, #10201d 0%, #132622 100%); color: var(--paper); }
        .fs-section__inner { max-width: 1240px; margin: 0 auto; }
        .fs-section__head { max-width: 640px; margin: 0 0 52px; }
        .fs-section__eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Mono', monospace; font-size: 12.5px;
          letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px;
        }
        .fs-section--light .fs-section__eyebrow { color: var(--clay); }
        .fs-section--dark .fs-section__eyebrow { color: var(--signal); }
        .fs-section__title {
          font-family: 'Fraunces', serif; font-weight: 500;
          font-size: clamp(30px, 3.6vw, 44px); line-height: 1.1;
          margin: 0 0 16px; letter-spacing: -0.01em;
        }
        .fs-section__lead { font-size: 16px; line-height: 1.8; margin: 0; max-width: 60ch; }
        .fs-section--light .fs-section__lead { color: rgba(16, 32, 29, 0.72); }
        .fs-section--dark .fs-section__lead { color: rgba(245, 241, 230, 0.78); }

        /* services */
        .fs-services__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
        }
        .fs-services__item {
          background: rgba(16, 32, 29, 0.03);
          border: 1px solid rgba(16, 32, 29, 0.08);
          border-radius: 20px; padding: 30px 26px;
          opacity: 0; transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease, border-color .3s ease, box-shadow .3s ease;
        }
        .fs-services__item--in { opacity: 1; transform: none; }
        .fs-services__item:hover { border-color: rgba(193, 122, 78, 0.4); box-shadow: 0 18px 40px rgba(16, 32, 29, 0.08); }
        .fs-services__icon {
          width: 52px; height: 52px; border-radius: 14px;
          background: rgba(193, 122, 78, 0.12); color: var(--clay);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; margin-bottom: 18px;
        }
        .fs-services__name {
          font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px;
          margin: 0 0 10px; letter-spacing: -0.01em; color: var(--ink);
        }
        .fs-services__desc { font-size: 14.5px; line-height: 1.75; margin: 0; color: rgba(16, 32, 29, 0.68); }

        /* gallery */
        .fs-gallery__grid {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px;
        }
        .fs-gallery__item {
          position: relative; border-radius: 18px; overflow: hidden; aspect-ratio: 4 / 3;
          opacity: 0; transform: translateY(24px) scale(.98);
          transition: opacity .7s ease, transform .7s ease;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }
        .fs-gallery__item--in { opacity: 1; transform: none; }
        .fs-gallery__item img { transition: transform .6s ease; }
        .fs-gallery__item:hover img { transform: scale(1.06); }
        .fs-gallery__item-tag {
          position: absolute; bottom: 14px; right: 14px;
          background: rgba(16, 32, 29, 0.6); backdrop-filter: blur(6px);
          color: var(--paper); font-family: 'Space Mono', monospace;
          font-size: 11px; letter-spacing: .08em; padding: 6px 12px; border-radius: 999px;
        }
        @media (max-width: 960px) { .fs-gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) { .fs-gallery__grid { grid-template-columns: 1fr; } }

        /* process */
        .fs-process__grid {
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); position: relative;
        }
        .fs-process__grid::before {
          content: ''; position: absolute; top: 26px; left: 6%; right: 6%; height: 1px;
          background: rgba(245, 241, 230, 0.15); z-index: 0;
        }
        .fs-process__step {
          position: relative; z-index: 1; padding-right: 20px;
          opacity: 0; transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .fs-process__step--in { opacity: 1; transform: none; }
        .fs-process__num {
          position: relative; z-index: 1; width: 52px; height: 52px; border-radius: 50%;
          border: 1px solid rgba(215, 255, 74, 0.4); background: #10201d;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Mono', monospace; font-size: 16px; color: var(--signal);
          margin-bottom: 22px;
        }
        .fs-process__title {
          font-family: 'Fraunces', serif; font-weight: 600; font-size: 18px;
          margin: 0 0 10px; color: var(--paper);
        }
        .fs-process__desc { font-size: 14.5px; line-height: 1.75; color: rgba(245, 241, 230, 0.72); margin: 0; }
        @media (max-width: 860px) {
          .fs-process__grid { grid-template-columns: 1fr; gap: 36px; }
          .fs-process__grid::before { display: none; }
        }

        /* contact */
        .fs-contact__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        .fs-contact__info {
          opacity: 0; transform: translateY(20px);
          transition: opacity .7s ease, transform .7s ease;
        }
        .fs-contact__info--in { opacity: 1; transform: none; }
        .fs-contact__row {
          display: flex; align-items: flex-start; gap: 14px; padding: 16px 0;
          border-bottom: 1px solid rgba(16, 32, 29, 0.1);
        }
        .fs-contact__row:last-child { border-bottom: none; }
        .fs-contact__row-icon {
          width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
          background: rgba(193, 122, 78, 0.12); color: var(--clay);
          display: flex; align-items: center; justify-content: center;
        }
        .fs-contact__row h4 { margin: 0 0 4px; font-family: 'Fraunces', serif; font-size: 15px; color: var(--ink); }
        .fs-contact__row p, .fs-contact__row a { margin: 0; font-size: 14.5px; color: rgba(16, 32, 29, 0.68); }
        .fs-contact__form {
          background: rgba(16, 32, 29, 0.03); border: 1px solid rgba(16, 32, 29, 0.08);
          border-radius: 22px; padding: 32px;
          opacity: 0; transform: translateY(20px);
          transition: opacity .7s ease .12s, transform .7s ease .12s;
        }
        .fs-contact__form--in { opacity: 1; transform: none; }
        .fs-contact__field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .fs-contact__field label {
          font-size: 12.5px; letter-spacing: .05em; text-transform: uppercase; color: rgba(16, 32, 29, 0.55);
        }
        .fs-contact__field input, .fs-contact__field textarea {
          border: 1px solid rgba(16, 32, 29, 0.15); border-radius: 12px;
          padding: 12px 14px; font-family: inherit; font-size: 14.5px;
          color: var(--ink); background: #fff; outline: none; resize: vertical;
          transition: border-color .25s, box-shadow .25s;
        }
        .fs-contact__field input:focus, .fs-contact__field textarea:focus {
          border-color: var(--clay); box-shadow: 0 0 0 3px rgba(193, 122, 78, 0.14);
        }
        @media (max-width: 860px) { .fs-contact__grid { grid-template-columns: 1fr; } }

        /* reviews / testimonials */
        .fs-testimonials__grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 26px;
        }
        .fs-testimonial {
          background: #fff; border: 1px solid rgba(16, 32, 29, 0.08); border-radius: 22px;
          padding: 28px; display: flex; flex-direction: column; gap: 16px;
          opacity: 0; transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease, box-shadow .3s ease;
        }
        .fs-testimonial--in { opacity: 1; transform: none; flex-direction: column-reverse; }
        .fs-testimonial:hover { box-shadow: 0 18px 40px rgba(16, 32, 29, 0.08); }
        .fs-testimonial__stars { display: flex; gap: 3px; color: var(--clay); }
        .fs-testimonial__quote { font-size: 14.5px; line-height: 1.8; color: rgba(16, 32, 29, 0.75); margin: 0; flex: 1; }
        .fs-testimonial__person { display: flex;flex-direction: column-reverse; align-items: center; gap: 12px; }
        .fs-testimonial__avatar { width: 200px !important; height: 200px !important; border-radius: 50%; object-fit: cover; flex-shrink: 0;  }
        .fs-testimonial__name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 14.5px; color: var(--ink); margin: 0; }
        .fs-testimonial__role { font-size: 12.5px; color: rgba(16, 32, 29, 0.55); margin: 0; }

        /* subscription plans */
        .fs-plans__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; align-items: stretch; }
        .fs-plans__card {
          background: rgba(245, 241, 230, 0.04); border: 1px solid rgba(245, 241, 230, 0.12);
          border-radius: 24px; padding: 34px 28px; display: flex; flex-direction: column;
          opacity: 0; transform: translateY(24px);
          transition: opacity .7s ease, transform .7s ease, border-color .3s ease;
        }
        .fs-plans__card--in { opacity: 1; transform: none; }
        .fs-plans__card--featured { background: rgba(215, 255, 74, 0.06); border-color: rgba(215, 255, 74, 0.35); }
        .fs-plans__badge {
          align-self: flex-start; background: var(--signal); color: #16220f;
          font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: .08em;
          text-transform: uppercase; padding: 6px 12px; border-radius: 999px; margin-bottom: 18px;
        }
        .fs-plans__name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 20px; color: var(--paper); margin: 0 0 8px; }
        .fs-plans__price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 22px; }
        .fs-plans__price-num { font-family: 'Fraunces', serif; font-size: 38px; color: var(--signal); }
        .fs-plans__price-period { font-size: 13px; color: rgba(245, 241, 230, 0.6); }
        .fs-plans__list { list-style: none; margin: 0 0 28px; padding: 0; display: grid; gap: 12px; flex: 1; }
        .fs-plans__list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; line-height: 1.6; color: rgba(245, 241, 230, 0.82); }
        .fs-plans__check { color: var(--signal); flex-shrink: 0; margin-top: 2px; }
        @media (max-width: 960px) { .fs-plans__grid { grid-template-columns: 1fr; } }

        .fs-footer {
          background: linear-gradient(180deg, #10201d 0%, #152320 100%);
          padding: 72px 24px 48px;
          color: var(--paper);
        }
        .fs-footer__inner {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 32px;
        }
        .fs-footer__brand { grid-column: span 2; max-width: 460px; }
        .fs-footer__brand .fs-logo { margin-bottom: 22px; }
        .fs-logo__name {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 600;
          margin: 0;
        }
        .fs-logo__tag {
          font-size: 13px;
          color: rgba(245, 241, 230, 0.78);
          margin-top: 4px;
        }
        .fs-footer__desc {
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(245, 241, 230, 0.8);
        }
        .fs-footer__col h4 {
          font-family: 'Fraunces', serif;
          font-size: 16px;
          margin-bottom: 18px;
          color: var(--paper);
        }
        .fs-footer__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 12px;
          color: rgba(245, 241, 230, 0.76);
        }
        .fs-footer__meta {
          margin: 0 0 12px;
          color: rgba(245, 241, 230, 0.78);
          font-size: 14px;
          line-height: 1.8;
        }
        .fs-footer__meta a {
          color: rgba(245, 241, 230, 0.92);
        }
        .fs-newsletter {
          display: flex;
          gap: 10px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        .fs-newsletter__input {
          flex: 1;
          min-width: 0;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 999px;
          padding: 14px 18px;
          color: var(--paper);
          outline: none;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
          transition: border-color .25s, background .25s, box-shadow .25s;
        }
        .fs-newsletter__input:focus {
          border-color: rgba(215,255,74,0.8);
          box-shadow: 0 0 0 4px rgba(215,255,74,0.12);
          background: rgba(255,255,255,0.12);
        }
        .fs-newsletter__input::placeholder {
          color: rgba(245, 241, 230, 0.6);
        }
        .fs-newsletter__btn {
          background: linear-gradient(135deg, #d7ff4a, #c17a4e);
          color: #16220f;
          border: none;
          border-radius: 999px;
          padding: 0 18px;
          min-width: 56px;
          height: 48px;
          cursor: pointer;
          font-size: 18px;
          transition: transform .25s ease, filter .25s ease, box-shadow .25s ease;
          box-shadow: 0 8px 30px rgba(215,255,74,0.16);
        }
        .fs-newsletter__btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.08);
          box-shadow: 0 10px 36px rgba(215,255,74,0.22);
        }
        .fs-footer__bar {
          max-width: 1240px;
          margin: 42px auto 0;
          padding-top: 22px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 24px;
          border-top: 1px solid rgba(245, 241, 230, 0.12);
          font-size: 13px;
          color: rgba(245, 241, 230, 0.68);
        }

        @media (max-width: 860px) {
          .fs-footer__inner { grid-template-columns: 1fr; }
          .fs-footer__brand { grid-column: span 1; max-width: none; }
          .fs-newsletter { max-width: 540px; }
        }
        @media (max-width: 640px) {
          .fs-footer { padding: 56px 18px 32px; }
          .fs-footer__bar { flex-direction: column; align-items: flex-start; }
        }

        @media (prefers-reduced-motion: reduce) {
          .fs-root * { animation: none !important; transition: none !important; }
          .fs-hero__word, .fs-eyebrow, .fs-hero__sub, .fs-hero__ctas, .fs-ruler__tick, .fs-hero__scrollcue { opacity: 1 !important; transform: none !important; }
          .fs-content__item { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
      <Header />
      <Hero />
      <Content />
      <Process />
      <Services />
      <Gallery />
      <Reviews />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}
