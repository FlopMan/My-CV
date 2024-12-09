export default function TitleLogin({
  title,
  label,
}: {
  title: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center mb-[2.22222rem]">
      <h1 className="text-[#121216] text-[2.77778rem] font-semibold leading-[1.3] mb-2">
        {title}
      </h1>
      <span className="text-[#525866] text-[1.11111rem] leading-[1.35]">
        {label}
      </span>
    </div>
  );
}
