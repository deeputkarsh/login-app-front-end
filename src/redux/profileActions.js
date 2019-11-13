import { createActions, handleActions, combineActions } from 'redux-actions'
import { SnackbarAction } from './snackbarActions'
import { UserService } from '../services'

const defaultState = { mobile: '', name: '', email: '' }

const update = data => dispatch => {
  dispatch(updateProfile(data)).then(({ payload }) => {
    dispatch(SnackbarAction.show(payload))
    dispatch(onInputChange(defaultState))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const { updateProfile, getProfile, onInputChange } = createActions({
  UPDATE_PROFILE: async (form) => {
    const response = await UserService.updateProfile(form)
    console.log(response)
    return response.data.message // 'Update successful!!'
  },
  GET_PROFILE: async () => {
    const response = await UserService.getUserData()
    return response.data
  }
}, 'ON_INPUT_CHANGE', { prefix: 'PROFILE' })
export const ProfileAction = { update, getProfile, onInputChange }

export default handleActions({ [combineActions(onInputChange)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
