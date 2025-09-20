import type { ActionFunction, LoaderFunction } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import type { IRoute, Pages } from "../types/Route.type.ts";
import NotFound from "../pages/NotFound.tsx";
import Layout from "../layouts/Layout.tsx";

const pages: Pages = import.meta.glob("../pages/**/*.tsx", { eager: true });
const routes: IRoute[] = [];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) continue;

  const normalizedPathName =
    fileName === "index"
      ? "" // 루트 index.tsx
      : fileName.replace(/\$/g, ":").replace(/\/index$/, "");

  routes.push({
    path: `/${normalizedPathName}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

// NotFound 라우트 추가
routes.push({
  path: "*",
  Element: () => <NotFound />,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: null,
    children: routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    })),
  },
]);

export default router;
