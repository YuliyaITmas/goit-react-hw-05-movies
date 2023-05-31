

import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useState } from 'react';
import { ButtonSearch, Input, Search } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return;
    }
    onSubmit(searchValue.trim());
    setSearchValue('');
 
  };

  return (
    <Search onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Enter a keyword"
      />
      <ButtonSearch type="submit">
        
        <BiSearchAlt2 size="26" />
     
      </ButtonSearch>
    </Search>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
