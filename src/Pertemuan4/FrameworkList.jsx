import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">Product Name : {item.name}</h2>
                    <p className="text-gray-600">Made by : <b>{item.details.developer}</b></p>
                    <p className="text-yellow-10">Released in : <b>{item.details.releaseYear}</b></p>
                    <p className="text-blue-600">Site URL : <b>{item.details.officialWebsite}</b></p>
                    <p className="mt-3">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </p>


                </div>
            ))}
        </div>
    )
}