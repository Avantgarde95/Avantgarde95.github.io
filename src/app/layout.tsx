import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import { CommonLayoutProps } from "@/common/models/Props";

import "@/common/styles/Global.css";

const Layout = ({ children }: CommonLayoutProps) => (
  <html lang="ko" className="m-0 h-full w-full p-0 font-sans">
    <head>
      {/* Pretendard. */}
      <link
        rel="stylesheet"
        as="style"
        crossOrigin=""
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
      />
      {/* Fira Code. */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
    </head>
    <body className="m-0 h-full w-full p-0">
      <AppRouterCacheProvider>
        <div className="flex h-full w-full flex-row justify-center overflow-y-auto scroll-smooth bg-background text-primary">
          <div className="w-full max-w-screen-lg px-6 py-16">{children}</div>
        </div>
      </AppRouterCacheProvider>
    </body>
  </html>
);

export default Layout;
