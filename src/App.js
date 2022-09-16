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
        <div className="mt-64 pt-24 pb-14 bg-zinc-800/20 " id="recipe">
          <div className="text-center md:w-[90%] xl:w-4/5 mx-auto ">
              <div className="relative mx-auto w-40 h-40 border-2 rounded-full border-orange-500 duration-300 hover:scale-105">
                <a href="https://linkedin.com/in/sockets" className='relative z-[2] text-zinc-400/70 uppercase'>
                  <img className="p-2 rounded-full" src={profile} alt="Joseph Clardy"/>
                </a>
                <span className="absolute -right-6 -top-1 z-[1] fill-white/40 opacity-75">
                  <svg width="70" height="70" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img">
                    <defs>
                      <pattern id="patt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <rect rx="5" ry="5" x="0" y="0" width="4" height="4" className="text-white" fill="#f97316"></rect>
                      </pattern>
                    </defs>
                    <rect width="70" height="70" fill="url(#patt)"></rect>
                  </svg>
                </span>
                <span className="absolute -left-2 -bottom-4 z-[1] fill-white/40 opacity-75">
                  <svg width="70" height="70" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" role="img">
                    <defs>
                      <pattern id="patt" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                        <rect rx="5" ry="5" x="0" y="0" width="4" height="4" className="text-white" fill="#f97316"></rect>
                      </pattern>
                    </defs>
                    <rect width="70" height="70" fill="url(#patt)"></rect>
                  </svg>
                </span>
              </div>
            <div className="mt-8">
              <a href="https://linkedin.com/in/sockets" className='text-zinc-400/70 uppercase'>Recipe courtesy of Joseph Clardy's Grandmother</a>
              <h1 className='text-orange-500/80 capitalize text-[38px] font-bold'>Meat Loaf</h1>
            </div>
            <div className="mt-8 mx-auto  border-[1px] border-white/[5%] bg-zinc-800/40 w-4/5 rounded-md pb-8 mb-8">
              <div className="grid-cols-0 py-12 grid px-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 text-zinc-200">
                <div className="col-span-1"><span className="font-bold">Level:</span> <span className="bg-green-500/20 rounded-full px-4 py-[1px] text-green-400">Easy</span></div>
                <div className="col-span-1"><span className="font-bold">Prep Time:</span> 25 min</div>
                <div className="col-span-1"><span className="font-bold">Cook Time:</span> 45 min</div>
                <div className="col-span-1"><span className="font-bold">Total:</span> 1 hr </div>
                <div className="col-span-1"><span className="font-bold">Yield:</span> 8 servings</div>
              </div>
              <div className="mx-auto w-[90%] flex">
                <h2 className="text-zinc-200 text-[32px] font-semibold leading-none">Ingredients</h2>
                <span className="ml-2 mt-5 inline-block w-full h-[3px] rounded-full bg-orange-500"></span>
              </div>
              <div className="mt-10 mx-auto w-[90%] text-left">
                <ul className="list-disc list-inside grid grid-cols-2 text-zinc-100 capitalize">
                  <li>90% lean ground beef</li>
                  <li>15 oz. can tomato sauce</li>
                  <li>2 slices of gluten free bread</li>
                  <li>2 eggs</li>
                  <li>1/2 of whole chopped onion</li>
                  <li>salt and pepper to season</li>
                  <li>ketchup</li>
                </ul>
              </div>
              
              <div className="mt-20 mx-auto w-[90%] flex">
                <h2 className="text-zinc-200 text-[32px] font-semibold leading-none">Instructions</h2>
                <span className="ml-2 mt-5 inline-block w-full h-[3px] rounded-full bg-orange-500"></span>
              </div>
              <div className="mt-10 mx-auto w-[90%] text-left">
                <ul className="list-decimal list-inside text-zinc-100 capitalize">
                  <li> Preheat oven to 450° Fahrenheit.</li>
                  <li> Mix all of the Ingredients except for the ketchup.</li>
                  <li> Place tinfoil as a liner in a glass baking dish.</li>
                  <li> Put mixture in the dish and fold the ends over to close the top. </li>
                  <li> Bake for 45 minutes.</li>
                  <li> You can uncover for a few minutes near the end.</li>
                  <li> Make sure the top is browned. </li>
                  <li> Let the meatloaf rest for 8-10 minutes before serving (or it may fall apart). <span className="text-orange-400">**</span></li>
                  <li> Decorate the top with ketchup. </li>
                </ul>
              </div>

              <div className="mt-20 mx-auto w-[90%] flex">
                <h2 className="text-zinc-200 text-[32px] font-semibold leading-none">Notes</h2>
                <span className="ml-2 mt-5 inline-block w-full h-[3px] rounded-full bg-orange-500"></span>
              </div>
              <div className="mt-10 mx-auto w-[90%] text-left">
                <ul className="list-none list-inside text-zinc-100 capitalize">
                  <li> <span className="text-orange-400">*</span> Be sure to mix the meat really well.  This is a very moist meatloaf recipe so under mixing can cause the meatloaf to be too soft/mushy. </li>
                  <li> <span className="text-orange-400">* *</span> This is my grandmothers recipe and she tends to just eyeball things. <span className="font-bold">So keep this in mind while making</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 text-center">
            <a href="https://github.com/sockets/meatloaf" className="text-white">Checkout this project on <span className="text-orange-400 font-semibold">Github</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
