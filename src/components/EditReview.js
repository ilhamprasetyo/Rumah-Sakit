import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../App.css'

  class EditReview extends Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        message:'',
        alert: null,
        errors: []
      }
      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.handleReviewUpdate = this.handleReviewUpdate.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange (event) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    componentDidMount () {
      const id = this.props.match.params.id
      axios.get(`http://localhost:8000/api/edit/${id}`).then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.email,
          message: response.data.message
        });
      });
    }

    goToHome(){
      const getAlert = () => (
          <SweetAlert
              success
              title="Success!"
              onConfirm={() => this.onSuccess() }
              onCancel={this.hideAlert()}
              timeout={2000}
              confirmBtnText="Okay"
              >
              Data telah diperbaharui
          </SweetAlert>
        );
        this.setState({
          alert: getAlert()
        });
    }

    onSuccess() {
      this.props.history.push('/review');
    }

    hideAlert() {
      this.setState({
        alert: null
      });
    }

    handleReviewUpdate (event) {
      event.preventDefault()

      const review = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }

      const id = this.props.match.params.id

      axios.put(`http://localhost:8000/api/update/${id}`, review)
        .then(response => {
          // redirect to the homepage
          var msg = response.data.success;
          if(msg === true){
              this.setState({
                  message: response.data.message
              })
              return this.goToHome();
          }

        });
    }

    hasErrorFor (field) {
      return !!this.state.errors[field]
    }

    renderErrorFor (field) {
      if (this.hasErrorFor(field)) {
        return (
          <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
          </span>
        )
      }
    }

    render () {      
      return (
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card'>
                <div className='card-header bg-primary text-white'><strong>Update Review</strong></div>
                <div className='card-body'>
                  <form onSubmit={this.handleReviewUpdate}>
                    <div className='form-group'>
                      <label htmlFor='name'>Name</label>
                      <input
                        id='name'
                        type='text'
                        className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                        name='name'
                        value={this.state.name}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('name')}
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        id='email'
                        type='email'
                        className={`form-control ${this.hasErrorFor('email') ? 'is-invalid' : ''}`}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('email')}
                    </div>
                    <div className='form-group'>
                      <label htmlFor='message'>Message</label>
                      <textarea
                        id='message'
                        className={`form-control ${this.hasErrorFor('message') ? 'is-invalid' : ''}`}
                        name='message'                        
                        value={this.state.message}
                        onChange={this.handleFieldChange}
                      />
                      {this.renderErrorFor('message')}
                    </div>
                    <div className="btn-group text-center">
                      <button className='btn btn-primary'>Update</button>
                      <Link
                        className='btn btn-info'
                        to={`/review`}
                        >Back
                      </Link>
                    </div>
                    {this.state.alert}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
export default EditReview
