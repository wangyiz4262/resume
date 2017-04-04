import React from 'react';
import renderHTML from 'react-render-html';

class Contact extends React.PureComponent {
    render() {
        return (
            <div>
                <h1 id='fullname' className='center'>{this.props.fullname[this.props.lang]}</h1>
                <div className='center'>
                    {this.props.contact[this.props.lang].map((entry, index) => {
                        return <span key={index} className='contact'>{renderHTML(entry)}</span>;
                    })}
                </div>
            </div>
        );
        
    }
}

class Skills extends React.PureComponent {
    render() {
        const data = this.props.data[this.props.lang];
        return (
            <div>
                <h3 className='title'>{data.title}</h3>
                {data.content.map((entry, index) => (
                    <div key={index}>
                        <span className='skills-heading'>{entry.heading}</span>{entry.details}
                    </div>
                ))}
            </div>
        );
    }
}

class Frame extends React.PureComponent {
    render() {
        const data = this.props.data[this.props.lang];
        return (
            <div>
                <h3 className='title'>{data.title}</h3>
                {data.content.map((entry, index) => (
                    <div key={index} className='entry'>
                        <span className='heading' title={this.props.data.en.title}>{entry.heading}</span>
                        <span className='location' title={this.props.data.en.title}>{renderHTML(entry.location)}</span>
                        <span className='period right'>{entry.period}</span>
                        {entry.details.map((d, i) => <div key={i} className='details'>{renderHTML(d)}</div>)}
                    </div>
                ))}
            </div>
        );
    }
}

export {Contact, Skills, Frame};