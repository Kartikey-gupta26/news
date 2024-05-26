import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'
import Countries from './Countries.jsx'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('in'); // Initial value set to "India"
  const handleSelectChange = (event) => {
    setSelectedCountry(event.target.value); // Update selected country when the dropdown selection changes
  };
  

  return (
      <div className="container mx-auto flex bg-black h-auto text-white">


          {/* <div className="first w-[20%] pl-[5%] pr-[2%]"> 
            <div className="logo my-4">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-10 mx-4"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FFFFFF"></path></g></svg>
            </div>
            <div className="sidebar flex justify-end">
              <ul className="flex-col justify-center space-y-3 text-2xl w-full">
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Home</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Explore</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Notifications</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Messages</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Grok</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Lists</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Communities</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Premium</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">Profile</li>
                <li className="p-2 px-4 flex justify-start items-center gap-4 w-full hover:bg-[#16181c] hover:rounded-full hover:cursor-pointer">More</li>
              </ul>
            </div>
          </div> */}


        <div className="second border-[1px] border-x-white border-y-black flex flex-col w-[100%]">
          <div className="header">
            <ul className='flex gap-10 px-5 py-2 justify-around'>
              <li><div >
                  <select id="countryDropdown" className='bg-black' value={selectedCountry} onChange={handleSelectChange}>
        <option value="">Select a country</option>
        <option value="ae">United Arab Emirates</option>
        <option value="ar">Argentina</option>
        <option value="at">Austria</option>
        <option value="au">Australia</option>
        <option value="be">Belgium</option>
        <option value="bg">Bulgaria</option>
        <option value="br">Brazil</option>
        <option value="ca">Canada</option>
        <option value="ch">Switzerland</option>
        <option value="cn">China</option>
        <option value="co">Colombia</option>
        <option value="cu">Cuba</option>
        <option value="cz">Czech Republic</option>
        <option value="de">Germany</option>
        <option value="eg">Egypt</option>
        <option value="fr">France</option>
        <option value="gb">United Kingdom</option>
        <option value="gr">Greece</option>
        <option value="hk">Hong Kong</option>
        <option value="hu">Hungary</option>
        <option value="id">Indonesia</option>
        <option value="ie">Ireland</option>
        <option value="il">Israel</option>
        <option value="in">India</option>
        <option value="it">Italy</option>
        <option value="jp">Japan</option>
        <option value="kr">South Korea</option>
        <option value="lt">Lithuania</option>
        <option value="lv">Latvia</option>
        <option value="ma">Morocco</option>
        <option value="mx">Mexico</option>
        <option value="my">Malaysia</option>
        <option value="ng">Nigeria</option>
        <option value="nl">Netherlands</option>
        <option value="no">Norway</option>
        <option value="nz">New Zealand</option>
        <option value="ph">Philippines</option>
        <option value="pl">Poland</option>
        <option value="pt">Portugal</option>
        <option value="ro">Romania</option>
        <option value="rs">Serbia</option>
        <option value="ru">Russia</option>
        <option value="sa">Saudi Arabia</option>
        <option value="se">Sweden</option>
        <option value="sg">Singapore</option>
        <option value="sk">Slovakia</option>
        <option value="th">Thailand</option>
        <option value="tr">Turkey</option>
        <option value="tw">Taiwan</option>
        <option value="ua">Ukraine</option>
        <option value="us">United States</option>
        <option value="ve">Venezuela</option>
        <option value="za">South Africa</option>
                  </select>
                  {selectedCountry && (
                    <p>You selected: {selectedCountry}</p>
                  )}</div>
              </li>
            </ul>
          </div>
          <div className="posts bg-black-50">
          <div className="headline text-5xl text-center my-10">Top news from your country</div>
            <Card selectedCountry={selectedCountry} />
          </div>
        </div>


        <div className="third w-[30%] flex flex-col p-5 pr-[5%] ">

          <div className=" py-3 bg-black top-0">
            <input type="text" className=" px-10 search rounded-2xl bg-[#16181c] border-none w-full h-10" placeholder="Search"></input>
          </div>

          <div className="subtopremium m-2 bg-[#16181c] p-4 rounded-2xl mt-[15%]">
            <h6 className="text-2xl font-bold py-2">Subscribe to premium </h6>
            <div className="desc py-2">
              Subscribe to unlock new features and if eligible, receive a share of ads revenue.
            </div>
            <div className="py-2">
              <button type="button" className="bg-[#1d9bf0] rounded-full text-l font-bold px-5 h-9">Subscribe</button>
            </div>
          </div>

          <div className="whatshappening bg-[#16181c] m-2 rounded-2xl">
            <h6 className="text-2xl font-bold p-4">Whats happening</h6>
            <div className="trending p-4 hover:bg-[#1d1f23] hover:cursor-pointer"><div className="genre font text-xs text-gray-400">Trending in India</div><div className="hashtag font-bold">#ViratKohli</div><div className="trendingwith font text-xs text-gray-400">Trending with : <span className="text-[#1d9bf0]">Anushka</span></div></div>
            <div className="trending p-4 hover:bg-[#1d1f23] hover:cursor-pointer"><div className="genre font text-xs text-gray-400">Trending in India</div><div className="hashtag font-bold">#ViratKohli</div><div className="trendingwith font text-xs text-gray-400">Trending with : <span className="text-[#1d9bf0]">Anushka</span></div></div>
            <div className="trending p-4 hover:bg-[#1d1f23] hover:cursor-pointer"><div className="genre font text-xs text-gray-400">Trending in India</div><div className="hashtag font-bold">#ViratKohli</div><div className="trendingwith font text-xs text-gray-400">Trending with : <span className="text-[#1d9bf0]">Anushka</span></div></div>
            <div className="trending p-4 hover:bg-[#1d1f23] hover:cursor-pointer"><div className="genre font text-xs text-gray-400">Trending in India</div><div className="hashtag font-bold">#ViratKohli</div><div className="trendingwith font text-xs text-gray-400">Trending with : <span className="text-[#1d9bf0]">Anushka</span></div></div>
            <div className="trending over:bg-[#1d1f23] hover:cursor-pointer p-4"><div className="hashtag  text-[#1d9bf0]">Show more</div></div>
          </div>
        </div>



      </div>

  )
}

export default App
