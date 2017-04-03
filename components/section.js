import React from 'react';
import {data} from '../scripts/data.js';
import {languageStore} from '../scripts/store.js';
import {Row, Col, FormGroup, Radio} from 'react-bootstrap';
import renderHTML from 'react-render-html';

class LanguageRadio extends React.PureComponent {
    constructor() {
        super();
        this.clickHander = this.clickHander.bind(this);
    }
    clickHander(e) {
        languageStore.dispatch({type: e.target.getAttribute('lang')});
    }
    render() {
        return (
            <form>
                <FormGroup>
                    <Radio inline lang='ENGLISH' onClick={this.clickHander}>English</Radio>
                    <Radio inline lang='CHINESE' onClick={this.clickHander}>中文</Radio>
                </FormGroup>
            </form>
        );
    }
}

class Contact extends React.PureComponent {
    render() {
        return (
            <Row>
                <Col md={8}>
                    <h1 className='center'>{data.fullname[this.props.lang]}</h1>
                    <ul>
                        {data.contact[this.props.lang].map((entry, index) => {
                            return <li key={index} className='contact'>{renderHTML(entry)}</li>;
                        })}
                    </ul>
                </Col>
            </Row>
        );
        
    }
}

export {LanguageRadio, Contact};