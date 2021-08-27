import Link from 'next/link';
import Image from 'next/image';
import { IconContext } from 'react-icons'
import { FaConnectdevelop, FaCodepen, FaBuffer, FaChartLine, FaLayerGroup, FaMousePointer, FaServer, FaSlidersH, FaStore, FaTags, FaTasks, FaThList, 
    FaCog, FaCogs, FaCode, FaDatabase, FaDraftingCompass, FaDesktop, FaEnvelope, FaLaptopCode, FaPenFancy, FaPenNib, FaPencilAlt, FaPencilRuler, 
    FaShoppingBag, FaShoppingBasket, FaShoppingCart  } from 'react-icons/fa'

export default function HomeServices() {
  const card =
    'border border-gray-100 rounded shadow-sm overflow-hidden transform duration-200 ease-linear hover:-translate-y-2.5 hover:shadow-lg';

  return (
    <div className='flex w-full'>
      <div className='container'>
        <div className='text-center'>
          <h4 className=''>We help businesses grow</h4>
        </div>
        
        <div className='flex flex-wrap justify-center'>
            <IconContext.Provider value={{size: 40, className: 'mx-4'}}>
                <FaConnectdevelop />
                <FaCodepen />
                <FaBuffer />
                <FaChartLine />
                <FaLayerGroup />
                <FaMousePointer />
                <FaServer />
                <FaSlidersH />
                <FaStore />
                <FaTags />
                <FaTasks />
                <FaThList />
                <FaCog />
                <FaCogs />
                <FaCode />
                <FaDatabase />
                <FaDraftingCompass />
                <FaDesktop />
                <FaEnvelope />
                <FaLaptopCode />
                <FaPenFancy />
                <FaPenNib />
                <FaPencilAlt />
                <FaPencilRuler />
                <FaShoppingBag />
                <FaShoppingBasket />
                <FaShoppingCart />
            </IconContext.Provider>
        </div>
        
        <div className='grid grid-cols-4 gap-4'>
            <div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <IconContext.Provider value={{size: 48, className: 'flex justify-center w-full'}}><FaCogs /></IconContext.Provider>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-center'>Web &amp; App Development</div>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
            <div>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <IconContext.Provider value={{size: 48, className: 'flex justify-center w-full'}}><FaCogs /></IconContext.Provider>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-center'>Web &amp; App Development</div>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <IconContext.Provider value={{size: 48, className: 'flex justify-center w-full'}}><FaCogs /></IconContext.Provider>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-center'>Web &amp; App Development</div>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>    
            </div>
            <div>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <IconContext.Provider value={{size: 48, className: 'flex justify-center w-full'}}><FaCogs /></IconContext.Provider>
                    <div className='px-6 py-4'>
                        <div className='font-bold text-xl mb-2 text-center'>Web &amp; App Development</div>
                        <p className='text-gray-700 text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>

      </div>
    </div>
  );
}
