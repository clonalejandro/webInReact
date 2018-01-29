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

class Navbar extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.navbar(this.props);
    }


    /** REST **/

    /**
     * This function set the navbar
     * @param props
     * @return {*}
     */
    navbar(props){
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
                <div className="ui container cnav">
                    <div className="ui stackeable large secondary pointing menu">
                        <a className="toc item"><i className="sidebar icon"/></a>

                        <a className="inicio item" href="#"><ClonaLogo/> clonalejandro</a>

                        <div className="right item">
                            <a className={portfolio}><i className="octicon octicon-file-media"/> Portfolio</a>

                            <a className={blog}><i className="icon book"/> Blog</a>

                            <a className={lab}><i className="octicon octicon-octoface"/> Lab</a>

                            <a className={contact}><i className="octicon octicon-mail"/> Contact</a>

                            <a className="audio-toggle" onClick="caudio()"><i className="touch icon volume up"/></a>
                        </div>
                    </div>
                </div>
        );
    }


}

export default Navbar;
