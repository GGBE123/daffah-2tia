export default function ErrorA() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
            <h1 className="text-[100px] font-bold text-black leading-none">400</h1>
            <h2 className="text-2xl font-medium text-black mt-2">Bad Request</h2>
            <p className="text-base text-black mt-2">The server cannot process your request due to invalid syntax</p>
            <button
                onClick={() => window.location.href = '/'}
                className="mt-6 bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition"
            >
                <span className="text-lg">←</span>
                Back to Dashboard
            </button>
        </div>
    );
}