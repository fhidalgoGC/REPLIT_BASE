import { MainLayout } from "@/layouts/main.layout";
import { LoginLayout } from "@/layouts/login.layout";
import { HomePage } from "@/pages/home";
import { AboutPage } from "@/pages/about";
import { LoginPage } from "@/pages/login";

export const publicRoutes = [
  {
    path: "/login",
    component: LoginPage,
    layout: LoginLayout,
  },
];

export const mainRoutes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

export const mainLayout = MainLayout;
