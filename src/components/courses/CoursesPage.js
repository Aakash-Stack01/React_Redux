import React from "react";
import {connect} from 'react-redux'
import  courseAction from '../../Redux/Actions/courseAction'
import PropTypes from 'prop-types'

class CoursesPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      course:{
        title:""
      }
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
    const course={...this.state.course, title:event.target.value}
    this.setState({course})
  }
  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.createCourse(this.state.course)
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.course.title} onChange={this.handleChange}></input>
          <input type="submit" value="save"/>
          {
            this.props.courses.map(course =><div key={course.title}>{course.title}</div>)
          }
        </form>
      </div>
    )
  }
}

CoursesPage.propTypes={
  createCourse:PropTypes.func.isRequired,
  courses:PropTypes.array.isRequired
}
function mapStateToProps(state){
  return {
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch){
  return {
    createCourse: course=>{dispatch(courseAction(course))}
    //loadCourse : ()=>{dispatch(loadCourse}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
