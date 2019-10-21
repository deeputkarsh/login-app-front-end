import { createActions, handleActions, combineActions } from 'redux-actions'
import { SnackbarAction } from './snackbarActions'
import { UserService } from '../services'

const defaultState = { mobile: '', name: '', email: '', password: '' }

const signup = (data) => dispatch => {
  const signupAction = dispatch(fetchSignup(data))
  signupAction.then(({ payload }) => {
    dispatch(SnackbarAction.show(payload))
    dispatch(onInputChange(defaultState))
  }).catch(error => {
    const { response = { data: { error: 'Something went wrong' } } } = error
    dispatch(SnackbarAction.show(response.data.error))
  })
}
const { fetchSignup, onInputChange } = createActions({
  FETCH_SIGNUP: async (form) => {
    const response = await UserService.signup(form)
    console.log(response)
    return response.data.message // 'Signup successful!!'
  }
}, 'ON_INPUT_CHANGE', { prefix: 'SIGNUP' })
export const SignupAction = { signup, onInputChange }

export default handleActions({ [combineActions(onInputChange)]: (state, { payload }) => ({ ...state, ...payload }) }, defaultState)
