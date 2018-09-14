import React, { Component } from 'react';
import ClonaLogo from './ClonaLogo';

/**
 * Created by alejandrorioscalera
 * On 29/1/18
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

class Sidebar extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.sidebar(this.props);
    }


    /** REST **/

    /**
     * This function set the items of navbar and set the sidebar while web is responsive
     * @param props
     */
    sidebar(props){
        let logo = "item", portfolio = "item", blog = "item", lab = "item", contact = "item";

        switch (props.itemActive){
            default:
                logo = "item active";
                break;
            case "portfolio":
                portfolio = "item active";
                break;
            case "blog":
                blog = "item active";
                break;
            case "lab":
                lab = "item active";
                break;
            case "contact":
                contact = "item active";
                break;
        }

        return (
            <div className="ui vertical inverted sidebar menu">
                <a className={logo}>
                    <ClonaLogo/>
                </a>
                <a className={portfolio}>
                    <i className="octicon octicon-file-media"/> Portfolio
                </a>
                <a className={blog} href="https://blog.clonalejandro.me">
                    <i className="icon book left"/> Blog
                </a>
                <a className={lab}>
                    <i className="octicon octicon-octoface"/> Lab
                </a>
                <a className={contact} href="mailto:contact@clonalejandro.me">
                    <i className="octicon octicon-mail"/> Contact
                </a>
            </div>
        );
    }


}

export default Sidebar;