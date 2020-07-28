import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {
    state = {
        searchTerm: "",
    }

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = e => {
        const { searchTerm } = this.state;
        const { onSubmitForm } = this.props;

        onSubmitForm(searchTerm);

        e.preventDefault();
    }

    render() {
        return (
            <Paper evelation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;