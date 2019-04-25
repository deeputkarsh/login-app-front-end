import React, { Component } from 'react'
import axios from 'axios'
import { CardDesign, FieldSet, SubmitBtn } from '../common'
import { apiUrl } from '../../constants'

export class Signin extends Component {
  constructor (props) {
    super(props)
    this.fieldArray = [{
      name: 'mobile',
      labelName: 'Mobile',
      inputType: 'tel',
      inputClass: 'mobile-input'
    }, {
      labelName: 'Password',
      name: 'password',
      inputType: 'password',
      inputClass: 'password-input'
    }]
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this)
  }

  onSubmitSignIn () {
    if (!this.fieldSetRef) {
      return
    }
    const postData = this.fieldSetRef.getFieldValues()
    axios.post(`${apiUrl}login`, postData).then(data => {
      data = data.data
      if (data.isSuccess) {
        this.props.loadUser(data.data)
        window.location.hash = '/'
      }
    })
  }

  render () {
    return (
      <article className='center'>
        <main className=''>
          <CardDesign className='sign-in'>
            <FieldSet
              ref={inst => { this.fieldSetRef = inst }}
              fieldSetName='Sign In'
              fieldArray={this.fieldArray}
            />
            <SubmitBtn
              onSubmit={this.onSubmitSignIn}
              text='Sign in'
            />
          </CardDesign>
        </main>
      </article>
    )
  }
}
