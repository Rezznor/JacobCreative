
export default function Showcase({ pageTitle }) {
    
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-jcBlueDark bg-blend-multiply' >
        <div className='container pt-60 pb-40'>
            <div className='grid grid-cols-1 md:grid-cols-3 text-center md:text-left'>
                <div className='col-span-2'>
                    <h2 className='mb-8 text-gray-50 font-jcHeading2 font-bold tracking-tight text-4xl uppercase'>
                        {pageTitle}
                    </h2>
                </div>
            </div>
        </div>
    </div>
  );
}
