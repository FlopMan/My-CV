'use client';
import { useState } from 'react';

import { Assets } from '@/assets';
import InputRadio from '@/components/base/input/InputRadio';
import InputText from '@/components/base/input/InputText';
import InputTextArea from '@/components/base/input/InputTextArea';

enum JobType {
    FREELANCE = 'Freelance',
    FULLTIME = 'Fulltime',
}

interface Props {
    close: () => void;
}

function ConnectForm(props: Props) {
    const { close } = props;
    const [radio, setRadio] = useState<JobType>(JobType.FREELANCE);

    const handleChangeJobType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value as JobType);
    };

    const handleSubmit = () => {
        console.log(radio);
    };

    return (
        <div>
            <InputText placeholder="Your email" className="mt-5 max-lg:text-md-body-14" />
            <InputTextArea
                placeholder="Add job description"
                className="mt-4 max-lg:text-md-body-14"
            />
            <div className="flex gap-5 items-center justify-between mt-4">
                <InputRadio
                    value={JobType.FREELANCE}
                    label="Freelance"
                    name="radio"
                    className="w-full max-lg:text-md-body-14"
                    checked={radio === JobType.FREELANCE}
                    onChange={handleChangeJobType}
                />
                <InputRadio
                    value={JobType.FULLTIME}
                    label="Fulltime"
                    name="radio"
                    className="w-full max-lg:text-md-body-14"
                    checked={radio === JobType.FULLTIME}
                    onChange={handleChangeJobType}
                />
            </div>
            <InputText
                placeholder="Your timeline"
                className="mt-5 max-lg:text-md-body-14"
                rightIconProps={{
                    url: Assets.chevronDownIcon.src,
                    size: 16,
                }}
            />

            <div className="flex items-center mt-4 pb-5">
                <InputText placeholder="Your budget" className="grow max-lg:text-md-body-14" />

                <InputText
                    placeholder="USD"
                    value="USD"
                    className="ml-4 max-w-[200px] max-lg:text-md-body-14 max-lg:max-w-[120px]"
                    rightIconProps={{
                        url: Assets.chevronDownIcon.src,
                        size: 16,
                    }}
                />
            </div>

            <div className="flex items-center justify-end gap-2 mt-4 max-lg:text-md-body-16">
                <button
                    className="border bg-white rounded-sm flex items-center justify-center py-3 w-[120px] border-[#D4D4D4] text-black"
                    onClick={close}
                >
                    Cancel
                </button>

                <button
                    className="border bg-black text-white rounded-sm flex items-center justify-center py-3 w-[120px] border-[#D4D4D4]"
                    onClick={handleSubmit}
                >
                    Send it
                </button>
            </div>
        </div>
    );
}

export default ConnectForm;
