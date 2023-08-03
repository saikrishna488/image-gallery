import { useState } from "react";


// eslint-disable-next-line react/prop-types
const ImageSearch = ({searchText}) => {

    const [text,setText] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        searchText(text);
        console.log(text);
    }
  return (
    <div className="flex justify-center mx-auto my-4">
        <form onSubmit={submit} className="flex max-w-sm">
            <input type="text" placeholder="search images...." onChange={(e)=>{ setText(e.target.value)}} className="rounded border-2 border-purple-400 outline-0 mx-2 p-2"/>
            <input type="submit" value="Search" className="rounded bg-blue-300 px-3 py-2 cursor-pointer hover:bg-gray-500" />
        </form>
    </div>
  )
}

export default ImageSearch;
