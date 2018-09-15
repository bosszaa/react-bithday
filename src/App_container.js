import {connect} from 'react-redux'
import App from './App'

const mapStateToProps = (state) =>{
    return {
        number : state.number
    }
}

const mapDispatchToProps = (dispatcher) =>{
    return {
        add : () => dispatcher({type:'ADD'}),
        sub : () => dispatcher({type:'SUB'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)