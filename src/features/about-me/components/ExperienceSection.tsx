import { TextTitle } from '@/components/TextTitle';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

function ExperienceSection() {
    return (
        <div className="bg-theme-background green:bg-[#131414] flex items-center justify-center p-24 max-lg:px-5 max-lg:py-10">
            <div className="w-full space-y-8">
                <TextTitle title="EXPERIENCE" />

                {/* Experience Items */}
                <div className="pt-10 gap-10 max-lg:gap-6 flex flex-col">
                    {data.experiences.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'flex justify-between items-start border-[#252525] pb-10 max-lg:pb-6',
                                'max-lg:flex-col',
                                idx !== data.experiences.length - 1 ? 'border-b' : ''
                            )}
                        >
                            <div className="text-body-18 dark:text-[#C1C1C1] green:text-[#C1C1C1] light:text-[#272626] max-lg:text-md-body-14 max-lg:mb-3">
                                {item.period}
                            </div>
                            <div className="max-w-[720px]">
                                <div className="flex items-center max-lg:flex-col max-lg:items-start">
                                    <h2 className="text-title-h4 dark:text-white green:text-white max-lg:text-md-title-h5 light:text-light-primary">
                                        {item.title}
                                        <span className="mx-4 max-lg:hidden light:text-[#F65D2C]">
                                            •{' '}
                                        </span>
                                    </h2>

                                    <span className="text-body-20 dark:text-[#C1C1C1] green:text-[#C1C1C1] light:text-[#545151] max-lg:text-md-body-14 max-lg:pt-1">
                                        {' '}
                                        {item.company}
                                    </span>
                                </div>
                                <div className="gap-4 flex flex-col mt-6 max-lg:mt-5 max-lg:gap-1">
                                    {item.description.map((desc, descIdx) => (
                                        <div
                                            key={descIdx}
                                            className="text-body-16 dark:text-[#CCD7F2] green:text-[#CCD7F2] light:text-[#252525] max-lg:text-md-body-14"
                                        >
                                            {desc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;
