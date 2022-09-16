import logo from './meatloaf.png';
import profile from './profile.jpg';
import './App.css';
import { Nav } from './Nav';


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900">
      <Nav />
      <div className="mt-28 justify-center duration-300 motion-reduce:transition-none">
        <div className="md:w-[90%] xl:w-4/5 mx-auto md:grid-cols-0 pt-24 grid px-8 lg:grid-cols-5" id="home">
          <div className="mt-16 md:mt-24 md:col-span-3 text-center md:text-left">
              <a className="w-[260px] text-xs leading-5 font-medium text-orange-500 bg-orange-500/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-orange-500/30" href="#">
                <strong className="font-semibold">News</strong>
                <svg width="2" height="2" fill="currentColor" aria-hidden="true" className="ml-2 text-orange-500">
                    <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <span className="ml-2">Meatloaf Festival Coming Soon!</span>
                <svg width="3" height="6" className="ml-3 overflow-visible text-orange-300 dark:text-orange-400" aria-hidden="true">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </a>
            <h1 className="mt-4 text-[36px] md:text-[48px] lg:text-[58px] text-gray-100 font-bold leading-tight">Enjoy the <span className="text-orange-400">best <br/>meatloaf</span> with us...</h1>
            <p className="mt-4 text-gray-200 md:w-4/5">This amazing homemade meatloaf recipe is tender and juicy with a sweet tangy topping. It's a traditional meatloaf with ground beef, breadcrumbs, onions, seasonings and a ketchup-based topping.</p>
            <div className="mt-4 flex justify-center space-x-2 md:block">
                <a className="text-slate-200 border rounded-full border-orange-500 relative mt-5 duration-300 hover:scale-110 inline-block items-center justify-center p-8 pt-2 pb-2 text-sm md:text-lg font-semibold" href="#recipe">
                    View Recipe
                </a>
                <a className="text-slate-200 underline underline-offset-4 relative mt-5 duration-300 hover:scale-110 inline-block items-center justify-center p-8 pt-2 pb-2 text-sm md:text-lg font-semibold" href="/recipe.pdf">
                    Instant Download
                </a>
            </div>
          </div>
          <div className="md:col-span-2">
            {/* <div className="absolute w-1/2 top-0 right-0 h-full meatloaf"></div> */}
            <div className="relative">
            <span className="absolute hidden lg:block left-4 top-4 z-[1] fill-white/40 opacity-75">
                <svg width="134" height="134" viewBox="0 0 134 134" xmlns="http://www.w3.org/2000/svg" role="img">
                  <defs>
                    <pattern id="patt" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                      <rect rx="25" ry="25" x="0" y="0" width="6" height="6" className="text-white" fill="#f97316"></rect>
                    </pattern>
                  </defs>
                  <rect width="134" height="134" fill="url(#patt)"></rect>
                </svg>
              </span>
              <span className="absolute right-4 bottom-4 z-[1] fill-white/40 opacity-75">
                <svg width="134" height="134" viewBox="0 0 134 134" xmlns="http://www.w3.org/2000/svg" role="img">
                  <defs>
                    <pattern id="patt" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                      <rect rx="25" ry="25" x="0" y="0" width="6" height="6" className="text-white" fill="#f97316"></rect>
                    </pattern>
                  </defs>
                  <rect width="134" height="134" fill="url(#patt)"></rect>
                </svg>
              </span>
              <div className="relative mx-auto z-[2] hidden lg:block w-full rounded-full border-4 border-orange-500">
                <img className="p-4 rounded-full" src={logo} alt="Meatloaf" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
