import React, {useMemo} from 'react';
import dynamic from "next/dynamic";

export default function TextEditor ({onChange,value,quillRef}){
    const ReactQuill = dynamic(async () => {
        const { default: RQ } = await import('react-quill');
        return function comp({ forwardedRef, ...props }) {
            return <RQ ref={forwardedRef} {...props} />;
        };
    }, { ssr: false });

    const modules= useMemo(()=>({
        toolbar: [
            ['bold', 'italic'],
            ['link', 'blockquote', 'code', 'image'],
            [{
                'list': 'ordered'
            }, {
                'list': 'bullet'
            }]
        ]
    }),[]);

    return(
        <ReactQuill
            forwardedRef={quillRef}
            placeholder="본문을 입력하세요"
            modules={modules}
            value={value}
            onChange={onChange}
        />
    )
}