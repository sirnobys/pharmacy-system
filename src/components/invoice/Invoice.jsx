import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Image from "next/image";

export default function Invoice(props) {
    const invoiceRef = useRef();
    console.log(props);

    const invoiceDetails = {
        invoiceNumber: "PH-12345",
        date: "2024-11-15",
        pharmacyName: "HealthPlus Pharmacy",
        pharmacyAddress: "123 Main Street, City, State, ZIP",
        customerName: "John Doe",
        items: props.invoiceDetails
    };



    const calculateTotal = () => {
        return invoiceDetails.items?.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
    };

    const generatePDF = () => {
        const input = invoiceRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 190; // A4 width in mm (with margins)
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save(`invoice-${invoiceDetails.invoiceNumber}.pdf`);
        });
    };

    return (
        <div>
            {/* Invoice Content */}
            <div ref={invoiceRef} className="max-w-3xl mx-auto my-10 border border-gray-300 p-6 shadow-lg rounded-lg">
                <div className="flex  gap-24">
                    <div>
                        <Image
                            width={50}
                            height={32}
                            src={"/images/logo/logo.png"}
                            alt="Logo"
                            priority
                            className="dark:hidden"
                            style={{ width: "auto", height: "auto" }}
                        />

                    </div>
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl font-bold">Invoice</h1>
                        <p className="text-sm text-gray-600">{invoiceDetails.date}</p>
                    </header>

                </div>
                <section className="mb-8">
                    <h2 className="font-semibold">Pharmacy Details</h2>
                    <p>{invoiceDetails.pharmacyName}</p>
                    <p>{invoiceDetails.pharmacyAddress}</p>
                </section>
                <section className="mb-8">
                    <h2 className="font-semibold">Customer Details</h2>
                    <p>{invoiceDetails.customerName}</p>
                </section>
                <section className="mb-8">
                    <h2 className="font-semibold">Invoice Details</h2>
                    <p>Invoice Number: {invoiceDetails.invoiceNumber}</p>
                </section>
                <table className="w-full table-auto border-collapse border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Item</th>
                            <th className="border border-gray-300 px-4 py-2">Quantity</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoiceDetails.items?.map((item) => (
                            <tr key={item.id}>
                                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.quantity}</td>
                                <td className="border border-gray-300 px-4 py-2">${item.price.toFixed(2)}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    ${(item.quantity * item.price).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <footer className="text-right">
                    <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
                </footer>
            </div>

            {/* PDF Button */}
            <div className="text-center mt-6">
                <button
                    onClick={generatePDF}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
}
