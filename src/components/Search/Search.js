import React, { Component } from 'react'
import axios from 'axios'
import {Button} from "antd";

const { API_KEY } = process.env
const API_URL = 'http://localhost:2839/book/GetAllBooks';

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${'http://localhost:2839/book/GetAllBooks'}?api_key=${process.env}&prefix=${this.state.query}&limit=7`)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })
    }

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Search