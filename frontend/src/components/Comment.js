import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'

const Comment = (props) => {
    console.log(props)

    const deleteC = async (e) => {
        e.preventDefault()
        await props.deleteComment(props.id, props.comment._id)
        props.getItineraries(props.cityId)

    }
    return (
        <div className="">
            <div className="d-flex justify-content-center align-items-center">
                <img src={props.comment.userPic} width="5%" alt="..."/>
                <div>
                    <h6 className="index">{props.comment.userName}</h6>
                    <p className="bg-light rounded w-75">{props.comment.content}</p>
                </div>
                <button onClick={deleteC}>Delete</button>
            </div>
        </div>
        
    )
}


const mapDispatchToProps = {
    deleteComment: itinerariesActions.deleteComment,
    getItineraries: itinerariesActions.getItineraries
}
export default connect(null, mapDispatchToProps)(Comment)