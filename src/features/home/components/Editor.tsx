'use client';
import 'react-quill/dist/quill.snow.css';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import Toolbar, { formats, modules } from './Toolbar';

export default function TextEditor() {
    const [value, setValue] = useState('');

    return (
        <div className="bg-white relative border rounded-md overflow-hidden">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={(e) => setValue(e)}
                placeholder="Write your comment here"
                modules={modules}
                formats={formats}
            />
            <Toolbar />
        </div>
    );
}
