'use client'
import * as React from 'react';

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { useState } from 'react';
import SearchForm from '@/components/Header/SearchForm';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AddStock from '@/components/Modals/AddStock';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'image',
        headerName: 'Image',
        width: 150,
        editable: true,
        renderCell: (params) => (
            <img
                height={50}
                width={50}
                src={params.value}
            />
        )
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'supplier',
        headerName: 'Supplier',
        width: 150,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        width: 110,
        editable: true,
    },
    //   {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    //   },
];


function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%', bgcolor: 'white' }}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}

const products = [
    { id: 1, name: 'Aspirin', price: 10.5, image: 'https://www.svgrepo.com/show/201294/drugs-pharmacy.svg',supplier:'Tobinco', date:'10/10/24'},
    { id: 2, name: 'Cough Syrup', price: 15.0, image: 'https://www.cofsils.com/uploadfile/product/dx_cough.jpg', supplier:'Kinapharma', date:"10/2/25" },
    { id: 3, name: 'Vitamin C', price: 12.75, image: 'https://top-uppharmacy.com/wp-content/uploads/2023/07/Easylife-Vitamin-C-1000mg.jpg', supplier:"Ernest chemist",date:"10/2/25" },
];

export default function Inventory() {
    return (
        <DefaultLayout>
            <div className='flex justify-between items-center justify-center'>
                <SearchForm />
                <div>
                
                    <AddStock/>
                </div>
            </div>

            <div className="container mx-auto p-4">
                {/* <h1 className="text-2xl font-bold mb-4">Pharmacy POS</h1> */}
                <DataGridDemo />
            </div>
        </DefaultLayout>
    );
}
