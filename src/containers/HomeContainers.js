import Home from '../components/Home'
import {connect} from 'react-redux'
import addToCart from '../services/action/actions'

const mapStateToProps=sate=>({

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;