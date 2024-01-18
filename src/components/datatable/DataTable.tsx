import React from 'react'
import useFetch from '../../hooks/useFatch';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Post } from '../../interfaces/dataStructure';
import MenuComponent from '../dropDown/Dropdown';


const DataTable: React.FC = () => {
    const { data, error, loading } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 600 },
    ];
    return (
        <div style={{ width: '80vw' }}>
            <h2>User Data</h2>
            <DataGrid
                rows={data || []}
                columns={columns}
                getRowHeight={() => 'auto'}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 10, page: 0 },
                    },
                }}
            />
            <div style={{ marginTop: '20px' }}><MenuComponent /></div>
        </div>
    )
}

export default DataTable