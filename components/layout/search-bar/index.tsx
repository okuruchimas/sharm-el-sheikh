import {
  useRef,
  useState,
  useEffect,
  type Dispatch,
  type ChangeEvent,
  type KeyboardEvent,
  type SetStateAction,
} from 'react';
import styled from '@emotion/styled';
import type { selectOption } from '../../types/filter';

type SearchBarProps = {
  value: string;
  onSetValue: Dispatch<SetStateAction<string>>;
  options?: selectOption[];
  placeholder?: string;
  debounceDelay?: number;
  onChange: (query: string) => void;
  onSearch: (query: string) => void;
};

const SearchBar = ({
  value,
  options,
  placeholder = 'Search...',
  debounceDelay = 500,
  onChange,
  onSearch,
  onSetValue,
}: SearchBarProps) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSetValue(event.target.value);
    setMenuVisible(true);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      onChange(event.target.value);
    }, debounceDelay);
  };

  const handleSearch = (value: string) => () => {
    onSetValue(value);
    setMenuVisible(false);
    onSearch(value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value);
      setMenuVisible(false);
    }
  };

  return (
    <Wrapper ref={menuRef}>
      <InputWrapper>
        <SearchButton onClick={handleSearch(value)} tabIndex={0}>
          <SearchIcon src="/icons/search.svg" alt="search" />
        </SearchButton>
        <Input
          type="text"
          value={value}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onFocus={() => setMenuVisible(true)}
        />
      </InputWrapper>
      {menuVisible && options?.length ? (
        <Dropdown>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={handleSearch(option.value)}>
              {option.value}
            </DropdownItem>
          ))}
        </Dropdown>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '468px',

  [theme.breakpoints.mobile]: {
    maxWidth: '100%',
  },
}));

const InputWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

const SearchButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  left: '6px',
  width: '40px',
  height: '40px',
  zIndex: 1,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'unset',
  border: 'none',
  borderRadius: '50%',

  ':active, :focus': {
    boxShadow: theme.shadows[2],
  },
}));

const SearchIcon = styled('img')({
  width: '24px',
  height: '24px',
});

const Input = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '18px 16px 18px 48px',
  borderRadius: '12px',
  border: `1px solid ${theme.colors.grey}`,
  fontSize: '16px',
  outline: 'none',
  color: theme.colors.blue,

  ':active, :focus': {
    border: `1px solid ${theme.colors.blue3}`,
  },
}));

const Dropdown = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  marginTop: '4px',
  background: theme.colors.white,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
}));

const DropdownItem = styled('div')(({ theme }) => ({
  padding: '14px 16px',
  fontSize: '16px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colors.greyLight,
  },
}));

export default SearchBar;
