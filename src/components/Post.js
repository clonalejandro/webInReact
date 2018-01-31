import React, { Component } from 'react'

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

class Post extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.post(this.props);
    }


    /** REST **/

    post(props){
        const title = (props.postTitle == null || props.postTitle === undefined) ? "Unknown title" : props.postTitle,
              avatar = (props.postAvatar == null || props.postAvatar === undefined) ? "https://avatars3.githubusercontent.com/u/20615143?v=3&s=460" : props.postAvatar,
              description = (props.postDescription == null || props.postDescription === undefined) ? "Unknown description" : props.postDescription,
              type = (props.postType == null || props.postType === undefined) ? "Unknown post type" : props.postType;

        let obj = [];

        switch (type){
            default:
                obj[0] = <div className="post item">
                            <img className="ui avatar image lazy-load" src={avatar} />
                                <div className="content">
                                    <a className="header">{title}</a>
                                    <div className="description">
                                        {description}
                                    </div>
                                </div>
                            </div>;
                break;
            case "repo":
                obj[0] = <div className="post item">
                    <img className="ui avatar image lazy-load" src={avatar} />
                    <div className="content">
                        <a className="header">
                            {title} <span class="etiqueta etiqueta-rosa"><i className="icon github alternate"/> Repo</span>
                        </a>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>;
                break;
            case "news":
                obj[0] = <div className="post item">
                    <img className="ui avatar image lazy-load" src={avatar} />
                    <div className="content">
                        <a className="header">
                            {title} <span class="etiqueta etiqueta-roja"><i className="icon newspaper"/> News</span>
                        </a>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>;
                break;
            case "offtopic":
                obj[0] = <div className="post item">
                    <img className="ui avatar image lazy-load" src={avatar} />
                    <div className="content">
                        <a className="header">
                            {title} <span class="etiqueta etiqueta-roja"><i className="icon coffee"/> Offtopic</span>
                        </a>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                </div>;
                break;
        }

        return obj[0];
    }


}

export default Post