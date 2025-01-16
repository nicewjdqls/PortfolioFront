import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
} from '@tanstack/react-table';

const columnHelper = createColumnHelper();

const BoardTable = ({ posts }) => {
    // 컬럼 정의
    const columns = [
        columnHelper.accessor('title', {
            header: '제목',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('author', {
            header: '작성자',
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('created_at', {
            header: '작성일',
            cell: (info) => new Date(info.getValue()).toLocaleString(),
        }),
    ];

    // 테이블 인스턴스 생성
    const table = useReactTable({
        data: posts,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table style={{ border: '1px solid black', width: '100%' }}>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} style={{ padding: '10px', border: '1px solid black' }}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} style={{ padding: '10px', border: '1px solid black' }}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BoardTable;
