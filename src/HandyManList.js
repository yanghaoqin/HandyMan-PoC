import React, { Component } from 'react';
import {HandyMan} from './HandyMan';

class HandyManList extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            searchString: '',
            handyManList: [
                { id:1, handyManName: 'Owen', dateCreated: new Date(), handyManTitle: 'Network Engineer', body: 'Network Engineer and currently single.'},
                { id:2, handyManName: 'Rameen', dateCreated: new Date(), handyManTitle: 'Software Engineer', body: 'React Dev.'},
                { id:3, handyManName: 'Jared', dateCreated: new Date(), handyManTitle: 'Coder', body: 'React Noob.'},
                { id:4, handyManName: 'Wilson', dateCreated: new Date(), handyManTitle: 'Hacker', body: 'React noob'}
            ],
        };
        this.handleFilterSearch = this.handleFilterSearch.bind(this)
    }
    handleFilterSearch(e) {
        console.log("test")
        this.setState({
            searchString: e.target.value
        })
    }

    render() {
        const filteredList = this.state.handyManList.filter(handyman => {
            return handyman.handyManName.toUpperCase().includes(this.state.searchString.toUpperCase())
        })
        return (
            <div>
            <form>
                <input id="filter" type="text" value={this.state.searchString} onChange={this.handleFilterSearch.bind(this)} />
            </form>
            <h1>Available Handymen</h1>
                    {filteredList.map(handyman => (
                            <div key={handyman.id}>
                                <HandyMan handyMan={handyman} />
                            </div>
                    ))}
            </div>
        )
    }
}

export default HandyManList;