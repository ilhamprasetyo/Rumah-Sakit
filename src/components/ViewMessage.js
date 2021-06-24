import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../App.css'

class ViewMessage extends Component {
  constructor() {
    super()
    this.state = {
      filter: '',
      review: [],
      msg: null,
      type: null,
      flash:false,
      alert: null,
    }
  }

  hideAlert() {
      this.setState({
          alert: null
      });
  }

  confirmDelete(id){
          const getAlert = () => (
              <SweetAlert
                  warning
                  showCancel
                  confirmBtnText="Hapus"
                  cancelBtnText="Batal"
                  confirmBtnBsStyle="default"
                  cancelBtnBsStyle="danger"
                  title="Hapus Data?"
                  onConfirm={() => this.deleteItem(id)}
                  onCancel={() => this.hideAlert()}
                  focusCancelBtn
                  >
              </SweetAlert>
          );
          this.setState({
              alert: getAlert()
          });
      }

  deleteItem(id) {
    axios.delete(`http://localhost:8000/api/delete/${id}`).then(response => {
      var msg = response.data.success;
      if(msg === true){
        this.hideAlert();
        this.goToHome();
      }
    })
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
        Deleted article successfully
      </SweetAlert>
    );
    this.setState({
        alert: getAlert()
    });
  }

  componentDidMount () {
    axios.get('http://localhost:8000/api/all').then(response => {
        this.setState({
            review: response.data
        })
    })  
}

  onSuccess(){
      this.componentDidMount();
      this.hideAlert();
  }

  filter = () => {
    axios.get('http://localhost:8000/api/get?filter=' + this.state.filter).then(response => {
        this.setState({
            review: response.data
        })
    })  
  }

  
  reset = () => {
    axios.get('http://localhost:8000/api/all').then(response => {
        this.setState({
            review: response.data
        })
    }) 
    //eslint-disable-next-line
    this.state.filter = ""
}

  onChangeText = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { review } = this.state
    return (
      <div className="App">
        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'left'}}>
          <div class="container-fluid">
            <div class="my-3 text-center">
              <h1 class="display-4">Ulasan</h1>
            </div>
            <div class="my-3">
              <div class="form-inline">
                <div class="mr-3">
                  <input class="form-control" type="text" value={this.state.filter} onChange={this.onChangeText}/>
                </div>
                <div class="btn-group text-center mr-3">
                  <button class="btn btn-primary" onClick={this.filter}>Search</button>
                  <button class="btn btn-info" onClick={this.reset}>Reset</button>
                </div>
                <div>
                <Link
                  className='btn btn-success'
                  to={`/create`}
                  >Create
                </Link>                  
                </div>
              </div>
            </div>
            <div class="overflow text-nowrap table-responsive">
              <table class="table table-borderless table-hover">
                <thead class="sticky-top bg-primary text-white">
                  <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Ulasan</th>
                    <th>Opsi</th>
                  </tr>
                </thead>
                <tbody class="bg-light">
                  {review.map((data, i) => (
                    <tr key={i}>
                        <td className="align-middle text-center"><strong>{i + 1}</strong></td>
                        <td class="align-middle">{data.id}</td>
                        <td class="align-middle">{data.name}</td>
                        <td class="align-middle">{data.email}</td>
                        <td class="align-middle"><textarea class="form-control" disabled rows="3" cols="25">{data.message}</textarea></td>
                        <td className="align-middle text-center">
                          <div className="btn-group">
                            <Link
                              className='btn btn-warning'
                              to={`/edit/${data.id}`}
                              >Edit
                            </Link>
                            <button 
                              className='btn btn-danger'
                              onClick={() => this.confirmDelete(data.id)}>
                              Delete
                            </button>
                          </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {this.state.alert}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewMessage