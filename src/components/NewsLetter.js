import React, {Component} from 'react'
import Post from "./Post";

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

class NewsLetter extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.newsLetter();
    }


    /** REST **/

    newsLetter(){
        return (
            <div className="rcol-md-8">
                <h3 className="titler"><i className="octicon octicon-pencil"/> Latest Posts:</h3>

                <div className="ui very relaxed list">
                    <Post postTitle="Daniel Louise" postType="repo" postDescription={["Last seen watching", <a><b> Arrested Development </b></a>, "just now."]} />
                    <Post postTitle="Stevie Feliciano" postDescription={["Last seen watching", <a><b> Bob's Burgers </b></a> , "10 hours ago."]} />
                    <Post postTitle="Elliot Fu" postDescription={["Last seen watching", <a><b> The Godfather Part 2 </b></a>, "yesterday."]} />
                </div>
            </div>
        );
    }


}

export default NewsLetter