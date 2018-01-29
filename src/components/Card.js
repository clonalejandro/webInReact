import React, {Component} from 'react'

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

class Card extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return this.card(this.props);
    }


    /** REST **/

    card(props){
        return (
                    <div class="rcol-md-4">
                        <div class="ui raised card">
                            <div class="content head">
                                <div class="header"/>
                            </div>

                            <div class="content">
                                <h2 class="ui"><i class="icon student"/> {props.cardTitle}</h2>

                                <div class="ui small feed">
                                    <div class="event">
                                        <div class="content">
                                            <div class="summary text">
                                                {props.cardBody}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }


}

export default Card