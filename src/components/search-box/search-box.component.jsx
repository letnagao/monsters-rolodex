import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHndler}) => (
    <input 
        className = {`search-box ${className}`}
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHndler}
    />
); 

export default SearchBox;