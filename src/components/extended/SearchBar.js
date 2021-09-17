import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SearchBar() {
    return (
        <TextField
            placeholder="What are you looking for?"
            variant="outlined"
            InputProps={{
                startAdornment:
                    <InputAdornment color="inherit" position="start">
                        <SearchIcon />
                    </InputAdornment>
            }}
        />
    )
}