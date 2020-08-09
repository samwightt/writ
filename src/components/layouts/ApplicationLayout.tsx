import { FC, Suspense } from "react";
import ClientSideOnly from "utils/ClientSideOnly";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  href?: string;
}

const NavItem: FC<NavItemProps> = (props) => {
  const router = useRouter();

  const link = (
    <a className="text-black hover:text-white hover:bg-black px-3 py-2 rounded-md cursor-pointer transition-all duration-100 text-sm">
      {props.children}
    </a>
  );
  if (!props.href) return link;

  if (router.pathname === props.href) {
    return (
      <Link href={props.href}>
        <a className="text-white bg-black px-3 py-2 rounded-md cursor-pointer text-sm">
          {props.children}
        </a>
      </Link>
    );
  }

  return <Link href={props.href}>{link}</Link>;
};

const ApplicationLayout: FC = (props) => {
  return (
    <ClientSideOnly>
      <div className="min-h-screen bg-gray-100">
        <nav className="py-4 border-b border-gray-200 bg-white">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <Link href="/app">
              <a className="text-xl font-bold">writ</a>
            </Link>
            <ul className="flex flex-row space-x-2">
              <li>
                <NavItem href="/app">Spaces</NavItem>
              </li>
              <li>
                <NavItem>Account</NavItem>
              </li>
              <li>
                <NavItem>Log out</NavItem>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto">
          <Suspense fallback={<h1>Loading...</h1>}>{props.children}</Suspense>
        </div>
      </div>
    </ClientSideOnly>
  );
};

export default ApplicationLayout;
