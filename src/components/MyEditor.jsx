import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function MyEditor({ v = '', setV = null }) {

    const [value, setValue] = useState(v);

    useEffect(() => {
        setValue(v);
    }, [v]);

    const handleChange = (content) => {

        // делаем ссылки кликабельными

        setV(content);
        setValue(content);
    }

    return (
        <div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={handleChange}
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, 4, false] }],
                        [{ 'align': [] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'image'],
                        ['clean']
                    ]
                }}
            />
        </div>
    );
};

export { MyEditor };
