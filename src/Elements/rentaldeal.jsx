import { Link } from 'react-router-dom'
import Cardata from '../Reusecode/cardata.json'
import auto from '../assets/Auto.svg'
import door from '../assets/Door.svg'
import blackarrow from '../assets/black-arrow.svg'
import snow from '../assets/snow.svg'
import user from '../assets/user.svg'
import whitearrow from '../assets/whitearrow.svg'

export function Rentals() {
  let topcars = Cardata.filter((car,index,self)=>index===self.findIndex(c=>c.Id===car.Id))
  return (
    <>
      <div className='flex flex-col items-center font-[Poppins] w-full mt-10'>
        <h3 className='text[14px] text-[#1572D3] bg-[#d8e7f9] w-[226px] h-[42px] py-2 rounded-[8px]'>
          POPULAR RENTAL DEALS
        </h3>
        <h1 className='text-[38px] font-medium '>
          Most popular cars rental deals
        </h1>
        <div
          className='card'
          class=' flex flex-wrap justify-center items-center gap-8 mt-9  2xl:gap-15 xl:gap-15 lg:gap-33 md:gap-10 sm:gap-10 2xl:mt-40 xl:mt-20 lg:mt-10 md:mt-10 sm:mt-10 text-start'
        >
          {topcars.map((cars, index) => (
            <div
              key={index}
              className='py-7 flex-wrap w-[356px] flex  sm:flex-nowrap sm:w-[256px] flex-col gap-1 bg-white rounded-[9px] shadow-[0_12px_24px_rgb(19,24,104,0.2)]'
            >
              <img
                src={cars.img0}
                className={`px-6 py-4 ${index % 2 !== 0 ? 'py-5.5' : ''}`}
              />
              <h3 className='whitespace-nowrap sm:ml-6 ml-15 sm:text-[18px] text-[20px] font-medium'>
                {cars.brand}
              </h3>
              <div className='flex gap-3  px-15 sm:px-5 py-1'>
                <img src={cars.img1} />
                <div className='flex gap-1'>
                  <h3 className=' sm:text-[13px] text-[15px] font-medium'>
                    {cars.rate}
                  </h3>
                  <h3 className='whitespace-nowrap text-[#959595]   text-[15px] sm:text-[12px]'>
                    {cars.review}
                  </h3>
                </div>
              </div>

              <div className='flex flex-wrap m-auto justify-center  gap-1 sm:gap-0 sm:justify-between sm:px-5 sm:py-1 '>
                <div className='flex justify-between gap-13 '>
                  <div className='flex gap-1 py-1'>
                    <img src={user} />
                    <p className=' text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                      {cars?.passengerseat}
                    </p>
                  </div>
                  <div className='flex gap-1 py-1'>
                    <img src={auto} />
                    <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap '>
                      {cars?.transmission}
                    </p>
                  </div>
                </div>

                <div className='flex justify-between gap-8'>
                  <div className='flex whitespace-nowrap gap-1 py-1'>
                    <img src={snow} />
                    <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap'>
                      {cars?.aircool}
                    </p>
                  </div>
                  <div className='flex gap-1 py-1'>
                    <img src={door} />
                    <p className='text-[15px] sm:text-[12px] text-[#959595] font-normal whitespace-nowrap  '>
                      {cars?.doors}
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex justify-between px-10 py-3 sm:px-1 mt-2 sm:py-4 border-1 border-b-0 border-x-0 sm:w-[208px] ml-6 border-[#E0E0E0]'>
                <h3 className='text-[14px] text-[#595959] font-[300]'>Price</h3>
                <div className='flex text-[14px]'>
                  <h3 className='text-[16px] font-medium'>{cars.price}</h3>
                  <h3 className='text-[#595959] text-[14px]'>{cars.day}</h3>
                </div>
              </div>
              <div>
                {' '}
                <Link to={`/car/${index}`}>
                  <button className='flex gap-1 sm:ml-5 m-auto   px-14 bg-[#1572D3] items-center w-[208px] h-[40px] rounded-[8px] text-[14px] text-white cursor-pointer'>
                    {' '}
                    Rent now <img src={whitearrow} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className='  mt-5 cursor-pointer 2xl:mt-20 xl:mt-10 lg:mt-10 md:mt-10 sm:mt-10 bg-white w-[210px] h-[48px] rounded-[8px] text-[14px] font-medium text-[#959595] border-[#E0E0E0] hover:bg-[#E0E0E0] border-1  py-3 px-8'>
          <Link to='/Rental' className='flex gap-1'>
            Show all vehicles <img className='' src={blackarrow} />
          </Link>
        </button>
      </div>
    </>
  )
}
