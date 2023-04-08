export function InfoCard1() {
  return (
    <div className="grow bg-white rounded-3xl min-w-[10rem] m-6 p-6">
      <div className="flex justify-between">
        <h1 className="font-bold">Top Products</h1>
        <div>
          <h1 className="inline">May - June 2021</h1>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            
          >
            <path
              d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z"
              fill="#858585"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-3">
        <div className="p-2">pie chart</div>

        <div>
          <ul className="list-disc ml-6 font-bold ">
            <li className="text-[#98D89E]">
              <div className="text-black">
                Basic Trees
                <p className="font-normal text-slate-400">55%</p>
              </div>
            </li>
            <li className="text-[#F6DC7D]">
              <div className="text-black">
                Custom Short Pants
                <p className="font-normal text-slate-400">31%</p>
              </div>
            </li>
            <li className="text-[#EE8484]">
              <div className="text-black">
                Super Hoodies
                <p className="font-normal text-slate-400">14%</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------

export function InfoCard2() {
  return (
    <div className="grow bg-white rounded-3xl min-w-[20rem] m-6 p-6">
      <div className="flex justify-between">
        <h1 className="font-bold">Today's Schedules </h1>
        <div>
          <h1 className="inline font-thin">See All</h1>
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            
          >
            <path
              d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z"
              fill="#858585"
            />
          </svg>
        </div>
      </div>

      <div className="">
        <div className="flex flex-row mt-3">
          <div className="bg-[#9BDD7C] w-1"></div>
          <div className="ml-4 text-[#999999]">
            <h1 className="font-bold text-[#666666]">
              Meeting with suppliers from Kuta Bali
            </h1>
            <h1>14.00-15.00</h1>
            <h1>at Sunset Road, Kuta, Bali</h1>
          </div>
        </div>

        <div className="flex flex-row mt-4">
          <div className="bg-[#6972C3] w-1"></div>
          <div className="ml-4 text-[#999999]">
            <h1 className="font-bold text-[#666666]">
              Check operation at Giga Factor 1
            </h1>
            <h1>18.00-20.00</h1>
            <h1>at Central Jakarta</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
