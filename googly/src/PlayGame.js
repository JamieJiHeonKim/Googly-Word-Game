import React from 'react';
import  { Component } from 'react';


class PlayGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        /*fetch('https://rapidapi.com/mcnaveen/api/random-words-with-pronunciation')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    words: json,
                })
            });*/

        fetch("https://random-words-with-pronunciation.p.rapidapi.com/word", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "da94142ddemsh6346e32e7451b8bp19aa62jsn6480d070945c",
                "x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                words: json,
            })
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

        
    }

    render() {
        var { isLoaded, words } = this.state;

        if (!isLoaded) {
            return <div>Loading data from Wordnik API</div>;
        }

        else {
            return (
                <div className="playGame">
                    All data has been loaded
                    <ul>
                        {words.map(words => (
                            <li>
                                Word: {words.word}
                                <br></br>
                                Definition: {words.definition}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

}

export default PlayGame;