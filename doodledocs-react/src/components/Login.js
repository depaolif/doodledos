import '../css/Login.scss'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setToken, setUsername, setId } from '../actions/account'
import { setImageList } from '../actions/image'
import axios from 'axios'

class Login extends Component {
	constructor() {
		super()

		this.state = {
			username: '',
			password: ''
		}

		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		axios({
			method: 'POST',
			url: 'http://localhost:3001/v1/sessions',
			data: {username: this.state.username, password: this.state.password}
		})
		.then(resp => {
			this.props.setToken(resp.data.token)
			localStorage.setItem('token', resp.data.token)
			return resp.data.token
		})
		.then((token) => {
			axios({
				method: 'GET',
				url: 'http://localhost:3001/v1/me',
				headers: {bearer: token}
			})
			.then(resp => {
				this.props.setUsername(resp.data.username)
				this.props.setId(resp.data.id)
				this.props.setImageList(resp.data.images)
				this.props.history.push('/')
			})
		})
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="login_signup">
				<div>
					<label>Username: </label><input type="text" name="username" value={this.state.username} onChange={this.handleInput} /><br></br>
				</div>
				<label>Password: </label><input type="password" name="password" value={this.state.password} onChange={this.handleInput} />
				<input type="submit" value="Login" id="button"/>
			</form>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	setToken: (token) => {
		dispatch(setToken(token))
	},
	setUsername: (username) => {
		dispatch(setUsername(username))
	},
	setId: (id) => {
		dispatch(setId(id))
	},
	setImageList: (imageList) => {
		dispatch(setImageList(imageList))
	}
})

const ConnectedLogin = connect(null, mapDispatchToProps)(Login)

export default ConnectedLogin
