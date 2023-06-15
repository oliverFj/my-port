import { ref, set, push } from "firebase/database";
import db from '../firebase';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

function FirebaseInput() {
    const [form, setForm] = useState('Art');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const artTypes = ["3d Characters", "Product Design", "Art", "Other"]; // Replace with actual art types
    const writingTypes = ["Blog", "Essay", "Poem", "Other"]; // Replace with actual writing types
    const [tools, setTools] = useState('');
    const [description, setDescription] = useState('');
    const [imageThumbnail, setImageThumbnail] = useState('');
    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const resetForm = () => {
        setName('');
        setType('');
        setTools('');
        setDescription('');
        setImageThumbnail('');
        setLink('');
        setTitle('');
        setText('');
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (form === 'Art') {
            const artRef = ref(db, 'Art');
            const newArtRef = push(artRef);

            set(newArtRef, {
                name,
                type,
                tools,
                description,
                imageThumbnail,
                link,
            });
        } else if (form === 'Writings') {
            const writingsRef = ref(db, 'Writings');
            const newWritingRef = push(writingsRef);

            set(newWritingRef, {
                title,
                type,
                text,
            });
        }

        resetForm();
    };

    return (
        <div className="w-[1000px] mx-auto sm:px-6 lg:px-8 py-12">
            <button onClick={() => setForm('Art')} className="mb-8 inline-flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700">
                Art Form
            </button>
            <button onClick={() => setForm('Writings')} className="mb-8 inline-flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700 ml-4">
                Writings Form
            </button>
            <div className="bg-white border-2 border-black overflow-hidden ">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Input {form}</h3>
                    <form onSubmit={handleFormSubmit} className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {form === 'Art' ? (
                            <>
                                <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                <select value={type} onChange={(e) => setType(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                    {artTypes.map((artType, index) => (
                                        <option key={index} value={artType}>
                                            {artType}
                                        </option>
                                    ))}
                                </select>
                                <input type="text" name="tools" placeholder="Tools" value={tools} onChange={(e) => setTools(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                <textarea name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                <input type="text" name="thumbnail" placeholder="Image Thumbnail URL" value={imageThumbnail} onChange={(e) => setImageThumbnail(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                <input type="text" name="link" placeholder="Link" value={link} onChange={(e) => setLink(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            </>
                        ) : (
                            <>
                                <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                <select value={type} onChange={(e) => setType(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                                    {writingTypes.map((writingType, index) => (
                                        <option key={index} value={writingType}>
                                            {writingType}
                                        </option>
                                    ))}
                                </select>
                                {/* Remove the date input field */}
                                {/* <input type="text" name="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} className="p-3 border-2 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" /> */}
                                <ReactQuill value={text} onChange={setText} style={{ height: '200px' }} className="col-span-2 border-2 pb-11 border-black focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                            </>
                        )}
                        <div className="sm:col-span-2">
                            <button type="submit" className="w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium  text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FirebaseInput;

