export default function PageHeader({ children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">Dashboard</span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span className="text-gray-500">Dashboard</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500">Order List</span>
                </div>
            </div>
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}
