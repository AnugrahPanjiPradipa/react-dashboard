import navItems from './navItems';

const NavBar = () => {
  return (
    <nav className="bg-white rounded-xl text-center p-4 shadow-md border border-gray-200 h-20 transform transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-800">
      <div className="flex items-center text-center overflow-x-auto overflow-y-hidden gap-6.5 scrollbar-hide">
        {navItems.map((items, id) => (
          <a
            key={id}
            href={items.link}
            target="_blank"
            className="flex-shrink-0"
          >
            <img
              src={items.icon}
              alt={items.name}
              className="duration-300 hover:scale-[1.2]"
              title={items.name}
            />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
