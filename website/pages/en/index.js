/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
        <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
        </div>
      </SplashContainer>
    );
   }
}
       

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      </div>
    );
  }
}

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <MarkdownBlock>Rucio is an open-source software framework that provides scientiﬁc collaborations with the functionality to organize, man-age, and access their data at scale. The project is hosted by CERN-HSF</MarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'On the premier cohort for AWS Community Builders 2020. Read more about some of the community-driven projects that I am part of.',
            image: `${baseUrl}img/large-badge.png`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/about',
            title: 'AWS Community Builder 2020',
          },
          {
            content: 'The best way to learn is by doing. Here's a not-so-exhaustive list of projects I've been working on.',
            image: `${baseUrl}img/CERN-HSF-GSdocs-logo.png`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'docs/projects',
            title: 'Cool stuff I've been working on',
          },
          {
            content: 'I love learning & writing/speaking about them. Links to my conference talks/blogposts available here.',
            image: `${baseUrl}img/read.jpg`,
            imageAlign: 'top',
            imageLink: siteConfig.baseUrl + 'blog',
            title: 'What I'm learning',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

module.exports = Index;
