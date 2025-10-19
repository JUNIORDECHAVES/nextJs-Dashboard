import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customers',
}

export default function CustomersPage() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <h1 className="text-2xl font-bold">Customers</h1>
        </main>
    );
}
