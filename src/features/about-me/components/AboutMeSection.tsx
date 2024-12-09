import Image from '@/components/base/Image';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

const { aboutMe } = data;

function AboutMeSection() {
    return (
        <section className="bg-theme-background green:bg-transparent px-24 pb-24 max-lg:px-5 max-lg:py-10">
            <div className="mt-12 flex items-start gap-16 max-lg:flex-col max-lg:gap-8">
                <Image
                    src={aboutMe.avatar}
                    width={553}
                    height={378}
                    className="aspect-[553/378] w-[85%] object-cover max-lg:aspect-[335/229] min-w-[553px] max-lg:min-w-full"
                    alt={aboutMe.name}
                />
                <div className="w-full">
                    <div className="text-style-1 text-title-h3 max-lg:text-md-title-h3">
                        {aboutMe.message.title}
                    </div>
                    <p
                        className={cn(
                            'mt-6  text-body-16 max-lg:mt-5 max-lg:text-md-body-14',
                            'light:text-[#545151]',
                            'dark:text-[#E9E9E9]',
                            'green:text-[#E9E9E9]'
                        )}
                    >
                        {aboutMe.message.description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;
