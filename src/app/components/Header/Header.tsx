'use client'

export default function Header() {
  return (
    <header className="header-sect absolute top-0 right-0 w-full bg-transparent text-black p-4 pr-20 z-50">
        <nav className="mt-4"> {/* Increased margin-top for more gap */}
          <ul className="flex gap-5 justify-end font-hubballi"> {/* Increased space-x for more gap */}
            <li>
              <a href="#home" className="text-decoration-none transition duration-300 ease-in-out transform hover:bg-white hover:rounded-[5px] hover:text-black p-2" onClick={(e) => { e.preventDefault(); document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' }); }}>HOME</a>
            </li>
            <li>
              <a href="#skills" className="text-decoration-none transition duration-300 ease-in-out transform hover:bg-white hover:rounded-[5px] hover:text-black p-2" onClick={(e) => { e.preventDefault(); document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' }); }}>SKILLS</a>
            </li>
            <li>
              <a href="#projects" className="text-decoration-none transition duration-300 ease-in-out transform hover:bg-white hover:rounded-[5px] hover:text-black p-2" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>PROJECTS</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}