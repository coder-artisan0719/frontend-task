import { Link, NavLink } from 'react-router';

export default function Header() {
  return (
    <header className="border-b w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-xl font-semibold">
          Kyra
        </NavLink>

        <Link to={'/'}>Home</Link>
      </div>
    </header>
  );
}
