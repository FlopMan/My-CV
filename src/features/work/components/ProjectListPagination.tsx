'use client';
import React from 'react';

import Pagination from '@/components/pagination/Pagination';
import data from '@/data/data.json';

function ProjectListPagination() {
    const [currentPage, setCurrentPage] = React.useState(1);

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className="mt-12">
            <Pagination
                totalPages={data.projects.length}
                currentPage={currentPage}
                onPageChange={handleChangePage}
            />
        </div>
    );
}

export default ProjectListPagination;
