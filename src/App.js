import React from 'react';
import {Cards,Charts,CountryPicker}  from './components'
import styles from './App.module.css'
import {fetchData} from './api'

class App extends React.Component {
    state = {
        data:{},
        country:''
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data:fetchedData});
    }

    handleCountryChange = async(country) => {
        country = country;
    }
    render(){
        const { data } = this.state;
        return (
            <div className = {styles.container}>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange= {this.handleCountryChange}/>
                <Charts />
               
            </div>
        );
    }
}

export default App;