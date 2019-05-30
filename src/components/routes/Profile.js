import React, { Component } from 'react'
import { CardDesign, FieldSet, SubmitBtn } from '../common'
import { connect } from 'react-redux'
import { UserService } from '../../services/user-service'
import { actions } from '../../reduxHelpers'

class ProfileComponent extends Component {
  constructor (props) {
    super(props)
    this.fieldArray = [{
      name: 'name',
      labelName: 'Name',
      inputType: 'text',
      initialValue: props.user.name,
      inputClass: 'name-input'
    }, {
      name: 'email',
      labelName: 'Email',
      inputType: 'email',
      initialValue: props.user.email,
      inputClass: 'email-address'
    }, {
      name: 'mobile',
      labelName: 'Mobile',
      inputType: 'tel',
      initialValue: props.user.mobile,
      inputClass: 'mobile-input'
    }]
    this.onSubmitSignUp = this.onSubmitSignUp.bind(this)
  }

  onSubmitSignUp () {
    if (!this.fieldSetRef) {
      return
    }
    const postData = this.fieldSetRef.getFieldValues()
    UserService.updateProfile(postData, this.props.token).then(data => {
      if (data.data.isSuccess) {
        this.props.loadUser(postData)
        this.props.changeRoute('')
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
              fieldSetName='Profile'
              fieldArray={this.fieldArray}
            />
            <SubmitBtn
              onSubmit={this.onSubmitSignUp}
              text='Update'
            />
          </CardDesign>
        </main>
      </article>
    )
  }
}

const { commonActions: { changeRoute }, loginActions: { loadUser } } = actions
export const Profile = connect(state => {
  const { auth } = state
  return { ...auth }
}, { changeRoute, loadUser })(ProfileComponent)
