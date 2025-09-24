import type { ActionFunction, LoaderFunction } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import type { IRoute, Pages } from "../types/Route.type.ts";
import NotFound from "../pages/NotFound.tsx";
import Layout from "../layouts/Layout.tsx";
import MerchantLayout from "../layouts/MerchantLayout.tsx";
import RoomsPage from "../pages/merchant/$merchantCode/rooms";
import XcapePage from "../pages/merchant/$merchantCode/xcape";
import ReservationsPage from "../pages/merchant/$merchantCode/reservations";
import MerchantCode from "../pages/merchant/$merchantCode";
import Index from "../pages";

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
    path: normalizedPathName,
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

console.log(routes);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: null,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "merchant/:merchantCode/*",
        element: <MerchantLayout />,
        children: [
          {
            path: "",
            element: <MerchantCode />,
          },
          {
            path: "xcape",
            element: <XcapePage />,
          },
          {
            path: "rooms",
            element: <RoomsPage />,
          },
          {
            path: "reservations",
            element: <ReservationsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
