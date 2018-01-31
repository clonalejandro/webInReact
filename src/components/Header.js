import React, { Component } from 'react'
import Navbar from './Navbar'

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

class Header extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.header(this.props);
    }


    /** REST **/

    /**
     * This function set the Header with navbar
     * @param props
     * @return {*}
     */
    header(props){
        return (
            <div id="header" className="ui vertical masthead center aligned">
                <Navbar itemActive={props.itemActive} />
                <div className="ui text container">
                    <h1 className="ui icon header">
                        <img className="lazy-load" src="https://avatars3.githubusercontent.com/u/20615143?v=3&s=460" rel="icon" />
                        <div className="content">
                            <span className="titler" >Backend & Java Developer</span>
                            <br/>
                        </div>
                    </h1>

                    <br/>

                    <button className="ui btnp btnp-lg btnp-green">
                        <i className="octicon octicon-squirrel"/> Laboratory
                    </button>
                </div>
                {this.ultraBr()}
            </div>
        );
    }


    /** OTHERS **/

    /**
     * This function break lines three times
     * @return {*[]}
     */
    ultraBr(){
        return [<br/>, <br/>, <br/>];
    }


}

export default Header;