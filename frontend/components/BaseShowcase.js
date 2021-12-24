
export default function Showcase({ pageTitle, tagLine }) {
    
  return (
    <div className='bg-no-repeat bg-cover bg-center bg-jcBlueDark bg-blend-multiply' style={{backgroundImage: "url(/images/code_bg1.jpg)" }}>
        <div className='container pt-80 pb-20'>
            <div className='flex'>
                <div className='flex items-end w-full font-normal leading-5'>
                    <h2 className='font-jcHeading2 text-white relative px-24 pr-1'>
                        <span className='absolute h-px top-2 left-0 bg-white w-16'></span>
                        {pageTitle}
                    </h2>
                </div>
                <div className='w-full'>
                    <h4 className='mr-48 font-jcHeading2 font-normal text-white text-4xl'>{tagLine}</h4>                     
                </div>
            </div>
        </div>
    </div>
  );
}
