import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import Link from './link';
import './styles.css';
import config from '../../config.js';

import Search from './search/index';
const help = require('./images/help.svg');
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];
if(isSearchEnabled && config.header.search.indexName) {
  searchIndices.push(
    { name: `${config.header.search.indexName}`, title: `Results`, hitComp: `PageHit` },
  );
}

import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          }
        }
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header navBarHeader'}>
              <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                <svg className={'img-responsive logo'} xmlns="http://www.w3.org/2000/svg" width="222" height="90" viewBox="0 0 222 90" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" fill-rule="evenodd" d="M1.251 36.326l5.712-6.382 19.92 23.757L1.251 36.326zm5.712 31.583v-8.618l30.648 4.286-30.648 4.332zm25.354 19.565l-5.758-6.382 25.634-17.375-19.876 23.757zm31.856-2.422l-8.544-.885 7.476-30.14 1.068 31.025zm22.104-23.199l-6.965 5.031-14.535-27.39 21.5 22.36v-.001zm.93-32.096l-1.812 8.432-29.07-10.621 30.881 2.19.001-.001zM66.494 5.301l4.272 7.5-28.698 11.6 24.426-19.1zm-31.716-4.24l8.172 2.656-13.56 27.904 5.388-30.56zM8.356 19.136l7.848-3.494 8.544 29.86L8.356 19.136zM.833 50.347l3.483-7.873 26.283 16.444-29.766-8.57v-.001zm15.185 28.23l-2.647-8.2 30.463-5.403-27.816 13.603zm30.138 10.76l-7.477-4.285 19.086-24.503-11.61 28.788h.001zm29.58-12.204l-8.405 1.816-2.183-30.978 10.588 29.162zm13.838-28.929l-5.061 6.988-22.29-21.568 27.351 14.58zm-9.008-30.745l.882 8.572-30.927-1.072 30.045-7.5zM53.353.596l6.362 5.776-23.682 19.985L53.353.596zM21.869 6.372h8.59l-4.318 30.745-4.272-30.745zm85.454 52.321V30.768h10.069c8.18 0 13.53 5.585 13.53 13.845 0 8.26-5.31 14.08-13.61 14.08h-9.99.001zm33.156.472c-4.012 0-6.686-2.32-6.686-5.82 0-1.889.826-3.462 2.399-4.445 1.416-.826 3.304-1.337 6.41-1.77l4.17-.511v-.512c0-2.95-1.14-4.208-3.658-4.208-2.32 0-3.697 1.22-3.854 3.461h-4.838c.315-4.208 3.618-6.804 8.692-6.804 5.821 0 8.417 2.478 8.417 8.18v5.861c0 2.675.197 4.72.59 6.096h-4.72a27.565 27.565 0 0 1-.314-3.382c-.944 2.4-3.422 3.854-6.608 3.854zm14.16-16.716v-3.421h3.54v-4.956l4.719-1.888v6.844h4.798v3.421h-4.798v9.4c0 2.125.905 3.108 2.871 3.108a7.19 7.19 0 0 0 1.927-.236v3.972c-1.14.236-2.006.354-3.225.354-4.72 0-6.293-2.478-6.293-6.45V42.449h-3.54.001zm17.148-6.686v-4.916h5.113v4.916h-5.113zm.236 3.265h4.72v19.665h-4.72V39.028zm18.957 20.137c-5.86 0-9.636-4.05-9.636-10.304 0-6.412 3.697-10.305 9.676-10.305 4.877 0 8.063 2.596 8.653 7.08l-4.602.747c-.315-2.675-1.849-4.13-4.17-4.13-2.91 0-4.719 2.438-4.719 6.49 0 4.247 1.77 6.686 4.798 6.686 2.36 0 3.816-1.455 4.248-4.209l4.445.905c-.708 4.366-4.012 7.04-8.693 7.04zm18.21 0c-4.01 0-6.685-2.32-6.685-5.82 0-1.889.826-3.462 2.399-4.445 1.416-.826 3.304-1.337 6.41-1.77l4.17-.511v-.512c0-2.95-1.14-4.208-3.658-4.208-2.32 0-3.697 1.22-3.854 3.461h-4.839c.315-4.208 3.618-6.804 8.692-6.804 5.821 0 8.417 2.478 8.417 8.18v5.861c0 2.675.197 4.72.59 6.096h-4.72a27.565 27.565 0 0 1-.314-3.382c-.944 2.4-3.422 3.854-6.608 3.854zm1.535-3.343c2.91 0 4.877-2.045 4.877-5.192v-1.258l-4.445.668c-2.595.433-3.775 1.377-3.775 3.068 0 1.652 1.258 2.714 3.343 2.714zm-68.712 0c2.91 0 4.877-2.045 4.877-5.192v-1.258l-4.444.668c-2.596.433-3.776 1.377-3.776 3.068 0 1.652 1.258 2.714 3.343 2.714zm-29.617-1.101h4.76c5.427 0 8.456-4.563 8.456-10.108 0-5.664-2.91-9.872-8.378-9.872h-4.838v19.98z"/></svg>
                {/* {logo.image !== '' ?
                  (<img className={'img-responsive'} src={logo.image} alt={'logo'} />)
                  :
                  (<img className={'img-responsive'} src={logoImg} alt={'logo'} />)
                } */}
                <div className={"headerTitle"} dangerouslySetInnerHTML={{__html: headerTitle}} />
              </Link>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper hidden-xs navBarUL'}>
                <Search collapse indices={searchIndices} />
              </div>
              ): null}
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr/>
                {isSearchEnabled ? (
                  <div className={'searchWrapper navBarUL'}>
                    <Search collapse indices={searchIndices} />
                  </div>
                  ): null}
              </div>
              <ul className={'nav navbar-nav navBarUL navBarNav navbar-right navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key}>
                        <a href={link.link} target="_blank" dangerouslySetInnerHTML={{__html: link.text}} />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ?
                  (<li><a href={helpUrl}><img src={help} alt={'Help icon'}/></a></li>) : null
                }
                {(tweetText !== '' || githubUrl !== '') ?
                  (<li className="divider hidden-xs"></li>): null
                }
                {tweetText !== '' ?
                  (<li>
                    <a href={'https://twitter.com/intent/tweet?&text=' + tweetText} target="_blank">
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                   </li>) : null
                }
                {githubUrl !== '' ?
                  (<li className={'githubBtn'}>
                    <GitHubButton href={githubUrl} data-show-count="true" aria-label="Star on GitHub">Star</GitHubButton>
                  </li>) : null}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
