import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Section from "./layout/Section";
import Button from "./elements/Button";
import Footer from "./layout/Footer";
import {Fragment, useState} from "react";
import "./MainPage.css"
import BreadthMenu from "./layout/BreadthMenu";
import {useInView} from "react-intersection-observer";
import ErrorNotification from "./ErrorNotification";



const MainPage = () =>{

    const {ref, inView, entry} = useInView({
        threshold: 0
    })


    //Query data from api
     const  fetchBreadthData = async () =>{
         setIsLoading(true)
         setError(null)
         try{
             const response = await fetch("http://127.0.0.1:8000/get-entries/full-market")
             const data = await response.json()
             if (!response.ok || !data){
                 throw new Error("Something went wrong... Try again later")
             }
             setSection(
                 <Fragment>
                     <Hero  className='is-medium is-link dynamic-slide-left' title='Check out this sick data'>
                     </Hero>
                     <Hero className='is-medium dynamic-slide-right'>
                         <BreadthMenu data={data}></BreadthMenu>
                     </Hero>
                 </Fragment>
             )
             setIsLoading(false)
         }catch(err){
             setIsLoading(false)
            setError(err.message)
         }
        }

    const updateSection = () =>{
        setSection(strategyChoiceMenu)
    }

    const mainPageDisplay =
            <Fragment>
                <Hero  className='is-primary dynamic-slide-left' title='Get signals from the MarketHero API'
                       subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at atque blanditiis dolore est laborum magnam molestias nesciunt, odio perspiciatis quam quidem quo repudiandae sunt, unde velit vero voluptatum!">
                </Hero>
                <Section className='is-large mb-2 has-text-centered dynamic-slide-right' childClassName='slide-to-right' title="Go to Strategy Selection">
                    <Button onClick={updateSection} className='is-warning mt-4' text='Select Strategy'></Button>
                </Section>
                <Hero innerRef={ref} className={ inView ? 'dynamic-slide-left is-info' : "is-info"} title='Source Code'
                      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at atque blanditiis dolore est laborum magnam molestias nesciunt, odio perspiciatis quam quidem quo repudiandae sunt, unde velit vero voluptatum!">
                </Hero>
            </Fragment>

    const strategyChoiceMenu = () => {
        window.scrollTo(0, 0)

        return<Section className='is-large mb-2 has-text-centered dynamic-slide-right' childClassName='slide-to-right'
                 title="Choose a Strategy">
            <div className='is-flex is-justify-content-center container'>
                <div className='is-flex inner-btn-container is-justify-content-space-around'>
                    <Button className='is-link mt-4 dynamic-object' text='Market Analysis'></Button>
                    <Button onClick={fetchBreadthData} className='is-success mt-4 dynamic-object'
                            text='Market Breadth'></Button>
                </div>

            </div>
        </Section>
    }

    // #TODO Main Content Listener (Change options on click)
    const [section, setSection] = useState(mainPageDisplay)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <Fragment>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
    <Navbar></Navbar>
            {section}
            {!isLoading && error && <Section className='is-small'>
                <ErrorNotification text={error}></ErrorNotification>
            </Section>}
            {isLoading ? <progress className="progress is-small is-primary" max="100">15%</progress> : null}
            <Footer></Footer>
        </Fragment>
    )
}

export default MainPage

