import { TextTitle } from '@/components/TextTitle';
import data from '@/data/data.json';
import { cn } from '@/lib/utils';

function EducationSection() {
    return (
        <div className="bg-theme-background green:bg-[#131414] flex items-center justify-center px-24 pb-24 max-lg:px-5 max-lg:pb-10">
            <div className="w-full">
                <TextTitle title="EDUCATION" />

                {/* Experience Items */}
                <div className="pt-10 gap-10 flex flex-col">
                    {data.educations.map((item, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'flex justify-between items-start border-[#252525] pb-10 max-lg:pb-6',
                                'max-lg:flex-col',
                                idx !== data.educations.length - 1 ? 'border-b' : ''
                            )}
                        >
                            <div className="text-body-18 dark:text-[#C1C1C1] green:text-[#C1C1C1] light:text-[#272626]  max-lg:text-md-body-14 max-lg:mb-3">
                                {item.time}
                            </div>
                            <div className="max-w-[720px] w-[720px] max-lg:w-full">
                                <div className="flex flex-col items-start gap-2">
                                    <h2 className="text-title-h4 dark:text-white green:text-white light:text-[#252525] max-lg:text-md-title-h5">
                                        {item.name}
                                    </h2>

                                    <span className="text-body-20 text-[#C1C1C1] max-lg:text-md-body-14">
                                        {' '}
                                        {item.major}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EducationSection;
