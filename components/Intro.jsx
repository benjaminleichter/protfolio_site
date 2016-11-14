import React, { PropTypes } from 'react';

class Intro extends React.Component {
    render () {
        const {
            showAboutMe,
        } = this.props;

        const aboutMeLinkElement = (
            <span
                className="hover-me with-after"
                onClick={ showAboutMe }
            >
                about me
            </span>
        );
        return (
            <div className="intro">
                <p>
                    Hey, I'm Ben Leichter. I'll keep it short unless you want to know more { aboutMeLinkElement }.
                    I'm currently a web developer at <a className="hover-me with-after" href="https://www.bevspot.com" target="_">BevSpot</a> in Boston, Massachusetts.
                    I really enjoy writing web apps with ReactJS/TypeScript and working with designers and other developers to make great software.
                </p>
                <div className="under-line">
                    <div className="under-line-inner" />
                </div>
                <a className="github-link hover-me" href="https://github.com/benjaminleichter" target="_">
                    <img src="img/GitHub-Mark-Light-120px-plus.png" />
                </a>
            </div>
        )
    }
}

Intro.propTypes = {
    showAboutMe: PropTypes.func,
}

export default Intro;