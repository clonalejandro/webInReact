import React, {Component} from 'react'

/**
 * Created by alejandrorioscalera
 * On 30/1/18
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©clonareact 2017 / 2018
 */

class Footer extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
       return this.footer();
    }


    /** REST **/

    /**
     * This function return a footer element
     * @return {*}
     */
    footer(){
        return (
            <footer className="has-adv">
                <div className="f-container">
                    <div className="footer-d">
                        <p>© <b>clonalejandro</b> powered with <label className="etiqueta etiqueta-rainbow"><a target="_blank" href="https://malextrap.github.io/"><i className="paint brush icon"/>Malextrap</a></label></p>

                        <ul>
                            <li><a href="emailto:contact@clonalejandro.me">Mail</a></li>
                            <li><a href="./blog">Blog</a></li>
                            <li><a href="./malextrap">Malextrap</a></li>
                            <li><a href="./terms">Terms &amp; License</a></li>
                        </ul>

                        <ul className="footer-social">
                            <li><a className="pi img-replace github" target="_blank" href="https://github.com/clonalejandro">Github</a></li>
                            <li><a className="img-replace g gitlab" target="_blank" href="https://gitlab.com/clonalejandro/">GitLab</a></li>
                            <li><a className="pi img-replace twitter" target="_blank" href="https://twitter.com/clonalejandro11">Twitter</a></li>
                            <li><a className="pi img-replace rss" href="#">RSS</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }


}

export default Footer