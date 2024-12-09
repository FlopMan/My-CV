import React from 'react';

export const modules = {
    toolbar: {
        container: '#toolbar',
    },
    history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
    },
};

export const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'align',
    'strike',
    'script',
    'blockquote',
    'background',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'color',
    'code-block',
];

export const QuillToolbar = () => (
    <div id="toolbar" className="!flex !items-center flex-wrap">
        <div className="!flex !items-center flex-wrap !w-full">
            <span className="ql-formats">
                <button className="ql-bold" />
                <button className="ql-italic" />
                <button className="ql-underline" />
                <button className="ql-strike" />
                <button className="ql-link" />
                <button className="ql-image" />
            </span>
            <button className="!px-4 !w-[unset] !py-1.5 !h-[unset] !bg-theme-primary rounded text-white max-lg:!py-0.5 max-lg:!px-2 self-end flex ml-auto">
                Send
            </button>
        </div>
    </div>
);

export default QuillToolbar;
