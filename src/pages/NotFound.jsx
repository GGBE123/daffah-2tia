export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
            <h1 className="text-[100px] font-bold text-black leading-none">404</h1>
            <h2 className="text-2xl font-medium text-black mt-2">Page not found</h2>
            <p className="text-base text-black mt-2">Oops!, the page you looking for does not exist</p>
            <button
                onClick={() => window.location.href = '/'}
                className="mt-6 bg-orange-400 hover:bg-orange-500 text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition"
            >
                <span className="text-lg">←</span>
                Back to home
            </button>
        </div>
    );
}
