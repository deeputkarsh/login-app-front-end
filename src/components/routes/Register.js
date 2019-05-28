import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardDesign, FieldSet, SubmitBtn } from '../common'
import { UserService } from '../../services/user-service'
import { actions } from '../../reduxHelpers'

export class RegisterComponent extends Component {
  constructor (props) {
    super(props)
    this.fieldArray = [{
      name: 'name',
      labelName: 'Name',
      inputType: 'text',
      inputClass: 'name-input'
    }, {
      name: 'email',
      labelName: 'Email',
      inputType: 'email',
      inputClass: 'email-address'
    }, {
      name: 'mobile',
      labelName: 'Mobile',
      inputType: 'tel',
      inputClass: 'mobile-input'
    }, {
      name: 'password',
      labelName: 'Password',
      inputType: 'password',
      inputClass: 'password-input'
    }]
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
  }

  onSubmitSignUp () {
    if (!this.fieldSetRef) {
      return
    }
    const postData = this.fieldSetRef.getFieldValues()
    UserService.signup(postData).then(data => {
      data = data.data
      if (data.isSuccess) {
        this.props.loginUser({ mobile: postData.mobile, password: postData.password })
      }
    })
  }

  render () {
    return (
      <article className='center'>
        <main className=''>
          <CardDesign className='sign-up' >
            <FieldSet
              ref={inst => { this.fieldSetRef = inst }}
              fieldSetName='Register'
              fieldArray={this.fieldArray}
            />
            <SubmitBtn
              onSubmit={this.onSubmitSignUp}
              text='Register'
            />
          </CardDesign>
        </main>
      </article>
    )
  }
}

const { loginUser } = actions.loginActions
export const Register = connect(null, { loginUser })(RegisterComponent)
