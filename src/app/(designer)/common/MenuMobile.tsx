import Link from "next/link";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export default function MenuMobile({ isOpen, setIsOpen }: Props) {
  return (
    <div
      className={`fixed bg-[#111] w-[calc(100%-1.46rem*2)] px-[1.17rem] pt-[1.17rem] transition-all duration-500 pb-[2.34rem] rounded-[1.46413rem] md:hidden z-[100] left-[50%]  top-[1rem] ${
        isOpen ? "-translate-x-1/2" : "translate-x-[100%]"
      }`}>
      <div className='flex justify-between items-center mb-[1.17rem] text-[#fff]'>
        <p className='text-[1.46413rem]  leading-[1.1] max-md:tracking-[-0.07321rem]'>Jenny Nguyen</p>
        <svg
          onClick={() => {
            setIsOpen(false);
            console.log("11");
          }}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M5.18372 19.0001C5.0485 19.0001 4.91631 18.96 4.80387 18.8849C4.69143 18.8098 4.60379 18.703 4.55204 18.5781C4.50029 18.4532 4.48676 18.3157 4.51314 18.1831C4.53953 18.0505 4.60466 17.9287 4.70028 17.8331L17.3331 5.20025C17.4613 5.07203 17.6352 5 17.8165 5C17.9979 5 18.1718 5.07203 18.3 5.20025C18.4282 5.32846 18.5002 5.50236 18.5002 5.68368C18.5002 5.86501 18.4282 6.03891 18.3 6.16712L5.66716 18.7999C5.60373 18.8635 5.52837 18.9139 5.44541 18.9482C5.36245 18.9826 5.27351 19.0002 5.18372 19.0001Z'
            fill='white'
          />
          <path
            d='M17.817 19.0001C17.7272 19.0002 17.6383 18.9826 17.5553 18.9482C17.4723 18.9139 17.397 18.8635 17.3335 18.7999L4.70073 6.16712C4.57252 6.03891 4.50049 5.86501 4.50049 5.68368C4.50049 5.50236 4.57252 5.32846 4.70073 5.20025C4.82895 5.07203 5.00285 5 5.18417 5C5.3655 5 5.53939 5.07203 5.66761 5.20025L18.3004 17.8331C18.396 17.9287 18.4612 18.0505 18.4876 18.1831C18.514 18.3157 18.5004 18.4532 18.4487 18.5781C18.3969 18.703 18.3093 18.8098 18.1968 18.8849C18.0844 18.96 17.9522 19.0001 17.817 19.0001Z'
            fill='white'
          />
        </svg>
      </div>
      <div className='grid grid-cols-1 gap-[1.17rem] text-[#fff]'>
        <Link className=' text-[1.1713rem] font-semibold leading-[1.5] text-center' href='/'>
          Home
        </Link>
        <Link className=' text-[1.1713rem] font-semibold leading-[1.5] text-center' href='/'>
          Projects
        </Link>
        <Link className=' text-[1.1713rem] font-semibold leading-[1.5] text-center' href='/'>
          Projects
        </Link>
        <Link className=' text-[1.1713rem] font-semibold leading-[1.5] text-center flex items-center justify-center' href='/'>
          Contact
          <svg className='w-[1.75695rem] h-[1.75695rem] object-contain ml-[0.59rem]' xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
            <path d='M5.5 12H19.5M19.5 12L12.5 19M19.5 12L12.5 5' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
          </svg>
        </Link>
      </div>
    </div>
  );
}
