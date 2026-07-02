import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Toaster } from "../components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          حدث خطأ في تحميل الصفحة
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          يمكنك المحاولة مجدداً أو العودة للصفحة الرئيسية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            حاول مجدداً
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

const travelAgencySchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "دايركت وايز للسفر والسياحة",
  alternateName: "Direct Ways Travel & Tourism",
  url: "https://directwaystravel.com",
  telephone: "+971507046772",
  email: "info@directwaystravel.com",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "دبي",
      addressCountry: "AE",
      streetAddress: "شارع الشيخ زايد، برج المدينة، المكتب 402",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
      streetAddress: "حي العليا، طريق الملك فهد، مركز العليا التجاري",
    },
  ],
  sameAs: [
    "https://www.instagram.com/directwaystravel",
    "https://t.me/directwaystravel",
  ],
  description: "دايركت وايز للسفر: حجوزات طيران، فنادق، عمرة، تأشيرات ورحلات سياحية فاخرة من الإمارات والسعودية.",
  foundingDate: "2009",
  areaServed: ["AE", "SA"],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "دايركت وايز للسفر — رحلات فاخرة وخدمات سياحية متكاملة" },
      { name: "description", content: "دايركت وايز للسفر: حجوزات طيران، فنادق، عمرة، تأشيرات ورحلات سياحية فاخرة من الإمارات والسعودية." },
      { name: "author", content: "Direct Ways Travel" },
      { property: "og:title", content: "دايركت وايز للسفر" },
      { property: "og:description", content: "رحلاتك الفاخرة تبدأ معنا — خبرة أكثر من 15 عاماً في السفر والسياحة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@DirectWaysTravel" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: travelAgencySchema,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body className="font-arabic-body bg-surface text-on-surface antialiased">
        {children}
        <Toaster position="top-center" richColors dir="rtl" />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
