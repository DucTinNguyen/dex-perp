import React from 'react';
import usePagination from '@/hook/use-pagination';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

interface Props {
  onPageChange?: (pageIndex: number) => void; // Expect 0-based index
  totalCount: number;
  siblingCount?: number;
  currentPage: number; // Expect 0-based index
  pageSize: number;
  debouncedValue?: string;
  className?: string;
}

const PaginationCustom = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage, // 0-based
  pageSize,
  debouncedValue,
  className,
}: Props) => {
  // Convert 0-based to 1-based for paginationRange
  const paginationRange = usePagination({
    currentPage: currentPage + 1, // 1-based
    totalCount,
    siblingCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (onPageChange) {
      onPageChange(
        currentPage >= Number(lastPage) - 1 ? currentPage : currentPage + 1
      ); // 0-based
    }
  };

  const onPrevious = () => {
    if (onPageChange) {
      onPageChange(currentPage === 0 ? 0 : currentPage - 1); // 0-based
    }
  };

  const handleItem = (item: any) => {
    if (onPageChange && item !== 'DOTS') {
      onPageChange(item - 1); // Convert back to 0-based
    }
  };

  return (
    <div className="flex justify-center items-center gap-x-4">
      <div
        onClick={onPrevious}
        className={`rounded-lg h-[35px] min-w-[35px] flex justify-center items-center ${
          currentPage === 0
            ? 'bg-[#FFFFFF0A] text-[#FFFFFF14] cursor-not-allowed border-[1px] border-[#FFFFFF14]'
            : 'bg-[#FFFFFF0A] text-white border-[1px] border-[#FFFFFF14] cursor-pointer'
        }`}
      >
        <MdOutlineKeyboardArrowLeft className="text-[24px]" />
      </div>
      <div className="flex gap-x-2">
        {paginationRange.map((item: any, index: number) => (
          <React.Fragment key={index}>
            {item === 'DOTS' ? (
              <div className="cursor-pointer rounded-lg h-[35px] min-w-[35px] flex justify-center items-center">
                <span>...</span>
              </div>
            ) : (
              <div
                onClick={() => handleItem(item)}
                className={`cursor-pointer rounded-lg border-[1px] border-[#FFFFFF14] h-[35px] min-w-[35px] flex justify-center items-center ${
                  item - 1 === currentPage ? 'bg-white text-black' : ''
                }`}
              >
                <span>{item}</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div
        onClick={onNext}
        className={`rounded-lg h-[35px] min-w-[35px] flex justify-center items-center ${
          currentPage >= Number(lastPage) - 1
             ? 'bg-[#FFFFFF0A] text-[#FFFFFF14] cursor-not-allowed border-[1px] border-[#FFFFFF14]'
            : 'bg-[#FFFFFF0A] text-white border-[1px] border-[#FFFFFF14] cursor-pointer'
        }`}
      >
        <MdOutlineKeyboardArrowRight className="text-[24px]"/>
      </div>
    </div>
  );
};

export default PaginationCustom;
