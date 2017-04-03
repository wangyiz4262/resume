import React from 'react';
import {languageStore} from '../scripts/store.js';
import {LanguageRadio, Contact, Education, Skills
    , Experiences, Projects} from './section.js';
import {Grid} from 'react-bootstrap';

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = { lang: 'en' };
    }
    componentDidMount() {
        this.unsubscribe = languageStore.subscribe(() => {
            this.setState({ lang: languageStore.getState() });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        return (
            <Grid>
                <LanguageRadio />
                <Contact lang={this.state.lang} />
                {/*<Education lang={this.state.lang} />
                <Skills lang={this.state.lang} />
                <Experiences lang={this.state.lang} />
                <Projects lang={this.state.lang} />*/}
            </Grid>
        );
    }
}

export {App};