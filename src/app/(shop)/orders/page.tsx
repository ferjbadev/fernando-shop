// https://tailwindcomponents.com/component/hoverable-table
import { Title } from '@/components';

import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

const orders = [
    { id: 1, name: 'Ada Lovelace', isPaid: true },
    { id: 2, name: 'Sarah Connor', isPaid: false },
    { id: 3, name: 'Son Goku', isPaid: true },
    { id: 4, name: 'Dracula Tepes', isPaid: false },
    { id: 5, name: 'Julio Verne', isPaid: true },
    // Add more orders as needed
]

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Title title="Orders" className="text-3xl font-bold text-center mb-8" />
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                #ID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map((order) => (
                            <tr key={order.id} className="transition-colors hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {order.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`items-center px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                        <IoCardOutline className="mr-1" />
                                        {order.isPaid ? 'Paid' : 'Unpaid'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link href={`/orders/${order.id}`} className="text-indigo-600 hover:text-indigo-900">
                                        View Order
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}