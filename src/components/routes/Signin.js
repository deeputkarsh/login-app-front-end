import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardDesign, FieldSet, SubmitBtn } from '../common'
import { actions } from '../../reduxHelpers'

export class SigninComponent extends Component {
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
      inputClass: 'password-input',
      eventHandlers: {
        onKeyDown: (event) => {
          if (event.keyCode === 13) {
            this.onSubmitSignIn()
          }
        }
      }
    }]
    this.onSubmitSignIn = this.onSubmitSignIn.bind(this)
  }

  onSubmitSignIn () {
    if (!this.fieldSetRef) {
      return
    }
    const postData = this.fieldSetRef.getFieldValues()
    this.props.loginUser(postData)
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

const { loginUser } = actions.loginActions
export const Signin = connect(null, { loginUser })(SigninComponent)
