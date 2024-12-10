import { ActiveLink } from '../ActiveLink/ActiveLink';

const navItems = [
  {
    path: '/home',
    text: 'Home',
  },
  {
    path: '/categories',
    text: 'Categories',
  },
  {
    path: '/departments',
    text: 'Departments',
  },
];

export const BottonNav = () => {
  return (
    <div className="flex px-2 py-1">
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem} />
      ))}
    </div>
  );
};
