import React, { Component } from 'react'
import Project from './Project';

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

class Exp extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.exp();
    }


    /** REST **/

    exp(){
        const minleyCss = {
            backgroundColor: 'rgb(84, 106, 121)',
            color: '#fff'
        };

        const clonathemeCss = {
            backgroundColor: 'rgb(46, 60, 67)',
            color: '#fff'
        };

        const whitesportsCss = {
            backgroundColor: 'rgb(63, 81, 181)',
            color: '#fff'
        };

        return (
            <div className="pf container">
                <div className="caja">
                    <hr className="lineap linea" />

                    <div className="alll">
                        <h3 className="ntitler">
                            <a href="./lab">
                                <img className="lazy-load" src="recursos/svg/velociraptor.svg" /> Last experiments
                            </a>
                        </h3>

                        <p className="nsubtitle">Quality is more important than quantity. — S. Jobs</p>

                        <br />
                    </div>

                    <div class="columns">
                        <Project projectTitle="MinleyNetwork" projectImage="https://i.imgur.com/sO6zJhj.png" projectUrl="https://minley.es" projectCss={minleyCss} projectTime="December 31, 2016"/>
                        <Project projectTitle="clonatheme" projectImage="https://i.imgur.com/pEeDfA8.png" projectUrl="https://github.com/clonalejandro/IntellijIdea-Theme" projectCss={clonathemeCss} projectTime="January 26, 2017"/>
                        <Project projectTitle="WhiteSports" projectImage="https://i.imgur.com/a6F9a7G.png" projectUrl="https://whitesports.es/tienda/" projectCss={whitesportsCss} projectTime="August 28, 2016"/>
                    </div>
                </div>
            </div>
        );
    }


}

export default Exp