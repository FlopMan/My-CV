import Image from "next/image";

export default function AboutMe() {
    return (
        <div>
            <h3 className="text-[#272626] text-[2.2222rem] font-semibold leading-[1.2] mb-[1.11rem]">
                About me
            </h3>
            <p className="text-[#222] md:text-[1.1111rem] text-[0.97222rem] leading-[1.35]">
                Hi, Im a freelance designer with 3 years of experience creating
                impactful designs across various fields. Creativity is at the
                core of my work, allowing me to develop unique and innovative
                solutions tailored to each clients needs. I’m also highly
                adaptable, easily shifting between different design styles and
                project requirements. Finally, my strong attention to detail
                ensures that every design is polished, user-friendly, and
                aligned with the overall vision. Let’s collaborate and bring
                your ideas to life!
            </p>
            <Image
                src={"/assets/images/pagess/avt.png"}
                alt="avt"
                width={400}
                height={400}
                className="w-full h-[23.27rem] object-cover rounded-[1.38889rem] md:hidden mt-[1.11rem]"
            />
        </div>
    );
}
