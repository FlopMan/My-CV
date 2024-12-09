export default function Experience() {
  return (
    <div>
      <h3 className='text-[#272626] text-[2.2222rem] font-semibold leading-[1.2] mb-[1.39rem]'>Software</h3>
      <div className="flex flex-col relative md:gap-[1.11rem] max-md:space-y-[0.83rem] pl-[1.2rem] before:content-[''] before:absolute before:top-0 before:left-0  before:h-full before:bg-theme-second-highlight before:w-[0.125rem]">
        {Array(3)
          .fill(0)
          .map((e, index) => (
            <div
              key={index}
              className="pb-[1.39rem] relative before:content-[''] before:absolute before:top-0 before:left-[-1.4rem] before:w-[0.5rem] before:h-[0.5rem] before:bg-theme-second-highlight before:rounded-full ">
              <p className='text-theme-second-highlight text-[0.97222rem] md:text-[1.1111rem] font-semibold leading-[1.35] mb-[0.56rem] md:mb-[1.11rem]'>05/2024 - Present</p>
              <p className='text-[#111] text-[1.11111rem] md:text-[1.38889rem] font-semibold leading-[1.1] mb-[0.42rem] md:mb-[0.56rem]'>Freelance Graphic Designer</p>
              <span className='text-[#595959] text-[0.97222rem] md:text-[1.11111rem] leading-[1.35] block mb-[1.11rem] md:mb-[1.39rem]'>Vertica Agency</span>
              <p className='text-[#222] text-[0.97222rem] md:text-[1.11111rem] leading-[1.35]'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like English.
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
