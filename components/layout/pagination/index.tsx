import styled from "@emotion/styled";

type PaginationProps = {
  pageSize: number;
  totalItems: number;
  currentPage: number;
  isDisabled?: boolean;
  onChangePage: (page: number) => void;
};

const Pagination = ({
  pageSize,
  totalItems,
  currentPage,
  isDisabled = false,
  onChangePage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const generatePageNumbers = () => {
    const pages = [];
    const maxPageDisplay = 5;

    if (totalPages <= maxPageDisplay) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const leftPage = Math.max(2, currentPage - 1);
      const rightPage = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (leftPage > 2) {
        pages.push("...");
      }

      for (let i = leftPage; i <= rightPage; i++) {
        pages.push(i);
      }

      if (rightPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  const handleChangePage = (isPrev: boolean) => {
    if (isDisabled) return;

    if (currentPage > 1 && isPrev) {
      onChangePage(currentPage - 1);
    }

    if (currentPage < totalPages && !isPrev) {
      onChangePage(currentPage + 1);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer>
      <Arrows>
        <ArrowButton
          onClick={() => handleChangePage(true)}
          disabled={currentPage === 1 || isDisabled}
          isLeft
        >
          <NavIcon
            src="/icons/promotions-section/arrow.svg"
            alt="Privious slide button"
          />
        </ArrowButton>
        <ArrowButton
          onClick={() => handleChangePage(false)}
          disabled={currentPage === totalPages || isDisabled}
          hideOnMobile
        >
          <NavIcon
            src="/icons/promotions-section/arrow.svg"
            alt="Next slide button"
          />
        </ArrowButton>
      </Arrows>
      <PageNumbers>
        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <PageNumber
              key={index}
              onClick={isDisabled ? undefined : () => onChangePage(page)}
              isActive={page === currentPage}
            >
              {page}
            </PageNumber>
          ) : (
            <Dots key={index}>...</Dots>
          ),
        )}
      </PageNumbers>
      <ArrowButton
        onClick={() => handleChangePage(false)}
        disabled={currentPage === totalPages || isDisabled}
        hideOnDesktop
      >
        <NavIcon
          src="/icons/promotions-section/arrow.svg"
          alt="Next slide button"
        />
      </ArrowButton>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

const Arrows = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const ArrowButton = styled("button", {
  shouldForwardProp: (prop) =>
    !["disabled", "isLeft", "hideOnMobile", "hideOnDesktop"].includes(prop),
})<{
  disabled: boolean;
  isLeft?: boolean;
  hideOnMobile?: boolean;
  hideOnDesktop?: boolean;
}>(({ theme, disabled, isLeft, hideOnMobile, hideOnDesktop }) => ({
  width: "40px",
  height: "40px",
  background: "none",
  border: "none",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
  display: hideOnDesktop ? "none" : "initial",

  ...(isLeft
    ? {
        img: {
          transform: "rotate(180deg)",
          marginRight: "8px",
        },
      }
    : {}),

  [theme.breakpoints.mobile]: {
    width: "35px",
    height: "35px",
    display: hideOnMobile ? "none" : "initial",
  },
}));

const NavIcon = styled("img")({
  width: "12px",
  height: "20px",
  objectFit: "cover",
});

const PageNumbers = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "8px",

  [theme.breakpoints.mobile]: {
    gap: "4px",
  },
}));

const PageNumber = styled("span", {
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  color: isActive ? theme.colors.white : theme.colors.black,
  backgroundColor: isActive ? theme.colors.blue : "none",
  fontWeight: isActive ? "700" : "400",

  [theme.breakpoints.mobile]: {
    width: "35px",
    height: "35px",
  },
}));

const Dots = styled("span")({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
