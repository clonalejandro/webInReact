import React, {Component} from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Page from './components/Page'
import Card from './components/Card'
import NewsLetter from './components/NewsLetter'
import Exp from './components/Exp'
import Footer from './components/Footer'

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

class Home extends Component {


    /** SMALL CONSTRUCTORS **/

    render(){
        return ([
            <div className="pusher">
                <Sidebar itemActive="logo"/>

                <Header itemActive=""/>

                <Page>
                    <div class="container">
                        <div className="columns">
                            <Card cardTitle="About me" cardBody={[
                                <p>Hi my name is <b class="bold">Alex</b> or <b class="bold">Alejandro</b>. Also known as <b class="bold">clonalejandro</b>.</p>,
                                <p>I&apos;m to <b class="bold">Back-end</b> developer for example: PHP, Js (JavaScript), Go, Python, Ruby...<br/>Also I&apos;m to a <b class="bold">Java</b> & <b class="bold">C++</b> Developer, because I love programming in this languages.</p>,
                                <p>Although I&apos;m <b class="bold">Spanish</b> <i class="es flag"/>person, this is a explanation about my low level in sentences in <b class="bold">English</b></p>,
                                <p>I work at <b class="bold">Minley</b> currently you can see my progress there: In <a href="https://github.com/MinleyNetwork/" target="_blank"><b class="bold">GitHub</b></a> or their <a href="https://www.minley.es" target="_blank"><b class="bold">Web</b></a>.<br/>On the other hand also I work in <b class="bold">DiveBlocks</b> also I leave my job for you in the <a href="https://github.com/DiveBlocks" target="_blank"><b class="bold">GitHub</b></a> is a <b class="bold">BuildTeam</b> of <b class="bold">Minecraft</b>.<br/>You can see the rest of my projects clicking <a href="./portfolio"><b class="bold">here</b></a>.</p>
                            ]}/>
                            <NewsLetter/>
                        </div>
                    </div>
                </Page>

                <Exp/>

            </div>,

            <Footer/>
        ]);
    }


}

export default Home
