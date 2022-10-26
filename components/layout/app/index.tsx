import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Divider, Logo } from "@/components/shared/icons";
import Meta from "../meta";
import ProjectSelect from "./project-select";
import UserDropdown from "./user-dropdown";

const NavTabs = dynamic(() => import("./nav-tabs"), {
  ssr: false,
  loading: () => <div className="-mb-0.5 h-12 w-full" />,
}); // dynamic import to avoid react hydration mismatch error

export default function AppLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { slug, key } = router.query as {
    slug?: string;
    key?: string;
  };

  return (
    <div>
      <Meta />
      <Toaster />
      <div className="min-h-screen w-full bg-gray-50">
        <div className="sticky top-0 left-0 right-0 z-20 border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-screen-xl px-2.5 md:px-20">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <a>
                    <Logo className="h-8 w-8 transition-all duration-75 active:scale-95" />
                  </a>
                </Link>
                <Divider className="ml-3 h-8 w-8 text-gray-200" />
                <ProjectSelect />
                {key && slug && (
                  <>
                    <Divider className="mr-3 h-8 w-8 text-gray-200" />
                    <Link href={`/${slug}/${key}`}>
                      <a className="text-sm font-medium">{key}</a>
                    </Link>
                  </>
                )}
              </div>
              <UserDropdown />
            </div>
            <NavTabs />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
