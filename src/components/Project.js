import React, { Component } from 'react'

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

class Project extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.project(this.props);
    }


    /** REST **/

    /**
     * This function set a box project
     * @param props
     * @return {*}
     */
    project(props){
        const url = props.projectUrl,
              title = props.projectTitle,
              time = props.projectTime,
              image = props.projectImage,
              css = props.projectCss;

        const style = {
            backgroundImage: 'url(' + image + ')'
        };

        return (
            <div className="project rcol-md-6 rcol-lg-4 ui">
                <a className="project-img ui" href={url} style={style}/>
                <div className="project-info" style={css}>
                    <a href={url}>{title}</a>
                    <time className="date" datetime={time}>{time}</time>
                </div>
            </div>
        );
    }


}

export default Project