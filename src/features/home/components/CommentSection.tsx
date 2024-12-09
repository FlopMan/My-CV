import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Image from '@/components/base/Image';
import data from '@/data/data.json';
const { commentList } = data;

const Editor = dynamic(() => import('./Editor'), { ssr: false });

function CommentSection() {
    return (
        <section className="bg-theme-background py-20 px-[202px] max-lg:px-5 max-lg:py-10">
            <div className="text-[#E9E9E9] text-body-16 pb-10 max-lg:text-twk-everett light:text-light-primary light:font-semibold">
                Community comments
            </div>
            <div className="flex items-start gap-2">
                <Image
                    src={'/assets/images/user/user-1.png'}
                    alt=""
                    width={64}
                    height={64}
                    className="max-lg:min-w-12 max-lg:w-12"
                />
                <div className="flex-1">
                    <Suspense fallback={null}>
                        <Editor />
                    </Suspense>
                </div>
            </div>
            <div className="mx-auto mt-10">
                {commentList.map((comment, index) => (
                    <div key={index} className="mb-4 flex items-start gap-2 max-lg:mb-6">
                        <Image
                            src={comment.avatar}
                            alt=""
                            width={64}
                            height={64}
                            className="min-w-[64px] max-lg:min-w-12 max-lg:w-12"
                        />

                        <div className="flex flex-col justify-start">
                            <div className="flex items-center">
                                <strong className="dark:text-white green:text-white light:text-light-primary text-body-18 max-lg:text-[1.125rem] max-lg:!font-normal">
                                    {comment.author}
                                </strong>
                                <span className="dark:text-[#C1C1C1] green:text-[#C1C1C1] light:text-[#C1C1C1] ml-4 text-body-14 max-lg:text-[0.875rem] !font-normal">
                                    {comment.time}
                                </span>
                            </div>
                            <p className="text-body-16 text-[#E9E9E9] light:text-light-primary max-lg:text-md-body-14 max-lg:!font-normal">
                                {comment.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CommentSection;
