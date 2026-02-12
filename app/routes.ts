import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("services", "routes/services.tsx"),
  route("case-studies", "routes/case-studies.tsx"),
  route("clients", "routes/clients.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
