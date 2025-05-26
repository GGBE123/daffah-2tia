import { useState } from "react";
import { useEffect } from "react";

export default function ListoUsers() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError('');
            try {
                // Fetch the data from the endpoint
                const response = await fetch('https://dummyjson.com/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result.users);  // Assuming 'users' is the key containing the data array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-6">List Of Known Members Currently In Maximum Security Prison</h2>

            {data && data.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-green-100 text-gray-800">
                            <tr>
                                <th className="text-left py-3 px-4">ID</th>
                                <th className="text-left py-3 px-4">First Name</th>
                                <th className="text-left py-3 px-4">Last Name</th>
                                <th className="text-left py-3 px-4">Email</th>
                                <th className="text-left py-3 px-4">Phone</th>
                                <th className="text-left py-3 px-4">Gender</th>
                                <th className="text-left py-3 px-4">Age</th>
                                <th className="text-left py-3 px-4">University</th>
                                <th className="text-left py-3 px-4">Company Name</th>
                                <th className="text-left py-3 px-4">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.id} className="hover:bg-green-50">
                                    <td className="py-2 px-4">{user.id}</td>
                                    <td className="py-2 px-4">{user.firstName}</td>
                                    <td className="py-2 px-4">{user.lastName}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.phone}</td>
                                    <td className="py-2 px-4">{user.gender}</td>
                                    <td className="py-2 px-4">{user.age}</td>
                                    <td className="py-2 px-4">{user.university}</td>
                                    <td className="py-2 px-4">{user.company?.name}</td>
                                    <td className="py-2 px-4">{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
}