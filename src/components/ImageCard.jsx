/* eslint-disable react/prop-types */


const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-2">
            <img src={image.webformatURL}alt=""/>
            <div className=" px-6 py-4">
                <div className=" font-bold text-purple-400 text-xl mb-2">
                    {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views :</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>downloads :</strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes :</strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {
                    tags.map((tag) => {
                        return (
                            <span key={tag} className=" inline-block rounded-full px-3 py-1 bg-gray-400 text-black text-sm font-semibold mr-2 mb-4">
                                #{tag}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageCard
