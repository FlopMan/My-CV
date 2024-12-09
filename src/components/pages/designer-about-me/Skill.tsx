export default function Skill() {
  const data = ["Illustration", "Branding Design", "Motion Graphic", "UX/UI Design", "Packaging Design", "Layout Design", "Video Editing"];
  return (
    <div>
      <h3 className='text-[#272626] text-[1.66667rem] md:text-[2.2222rem] font-semibold leading-[1.2] mb-[0.83rem] md:mb-[1.11rem]'>Skill</h3>
      <div className='flex flex-wrap gap-[0.56rem]'>
        {data.map((e, index) => (
          <div key={index} className='px-[1.11rem] py-[0.56rem] rounded-[6.94444rem] border-[1px] border-solid border-[#999]'>
            <span className='md:text-[1.1111rem] text-[#000000]'>{e}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
