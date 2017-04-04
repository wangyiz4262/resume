import React from 'react';
import {data} from '../assets/data.js';
import {Contact, Skills, Frame} from './section.js';
import {FormGroup, Radio} from 'react-bootstrap';

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = { lang: 'en' };
        this.clickHander = this.clickHander.bind(this);
    }
    clickHander(e) {
        this.setState({ lang: e.target.getAttribute('lang') });
    }
    render() {
        return (
            <div>
                <form id='languageSelector'><FormGroup>
                    <Radio inline name='language' lang='en' onChange={this.clickHander} checked={this.state.lang === 'en'}>English</Radio>
                    <Radio inline name='language' lang='zh' onChange={this.clickHander} checked={this.state.lang === 'zh'}>中文</Radio>
                </FormGroup></form>
                <Contact lang={this.state.lang} fullname={data.fullname} contact={data.contact} />
                <Frame lang={this.state.lang} data={data.education} />
                <Skills lang={this.state.lang} data={data.skills} />
                <Frame lang={this.state.lang} data={data.experiences} />
                <Frame lang={this.state.lang} data={data.projects} />
            </div>
        );
    }
}

export {App};