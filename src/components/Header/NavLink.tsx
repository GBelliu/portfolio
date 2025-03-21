import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({
  title,
  path,
  includes = false
}: NavLinkProps) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <p>{title}</p>
      </Link>
    </NavLinkContainer>
  );
}

NavLink.defaultProps = {
  includes: false
};
