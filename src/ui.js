import { O_DIRECT } from 'constants'

class UI {
	constructor() {
		this.post = document.querySelector('#posts')
		this.titleInput = document.querySelector('#title')
		this.bodyInput = document.querySelector('#body')
		this.idInput = document.querySelector('#id')
		this.postSubmit = document.querySelector('.post-submit')
		this.forState = 'add'
	}

	showPosts(posts) {
		let output = ''
		console.log(posts)

		posts.forEach((post) => {
			output += `
      <div class="card mb-3">
      <div class="card-body">
        <h4 class="card-title">${post.title.slice(0, 1).toUpperCase() + post.title.slice(1).toLowerCase()}</h4>
        <p class="card-text">${post.body.slice(0, 1).toUpperCase() + post.body.slice(1).toLowerCase()}</p>
        <a href="#" class="edit card-link" data-id="${post.id}">
          <i class="fa fa-pencil"></i>
        </a>

        <a href="#" class="delete card-link" data-id="${post.id}">
        <i class="fa fa-remove"></i>
      </a>
      </div>
    </div>
      `
		})
		this.post.innerHTML = output
	}
	// Show alert
	showAlert(message, className) {
		this.clearAlert()
		// Create div
		const div = document.createElement('div')
		// Add Classes
		div.className = className
		// Add text
		div.appendChild(document.createTextNode(message))
		// Get Parent
		const container = document.querySelector('.postsContainer')
		// Get Posts
		const posts = document.querySelector('#posts')
		// Insert alert div
		container.insertBefore(div, posts)
		// Timeout
		setTimeout(() => {
			this.clearAlert()
		}, 3000)
	}
	// clear Alert
	clearAlert() {
		const currentAlert = document.querySelector('.alert')
		if (currentAlert) {
			currentAlert.remove()
		}
	}
	// Clear all fields
	clearFields() {
		this.titleInput.value = ''
		this.bodyInput.value = ''
	}
	// Fill form to edit
	fillForm(data) {
		this.titleInput.value = data.title
		this.bodyInput.value = data.body
		this.idInput.value = data.id
		this.changeFormState('edit')
	}
	// Clear ID hidden value
	clearIdInput() {
		this.idInput.value = ''
	}
	// Change the form state

	changeFormState(type) {
		if (type === 'edit') {
			this.postSubmit.textContent = 'Update post'
			this.postSubmit.className = 'post-submit btn btn-warning btn-block'
			// Create cancel button
			const button = document.createElement('button')
			button.className = 'post-cancel btn btn-light btn-block'
			button.appendChild(document.createTextNode('Cancel Edit'))
			// Get parent
			const cardForm = document.querySelector('.card-form')
			// Get element to insert before
			const formEnd = document.querySelector('.form-end')
			// insert cancel button
			cardForm.insertBefore(button, formEnd)
		} else {
			this.postSubmit.textContent = 'post it'
			this.postSubmit.className = 'post submit btn btn-primary btn-block'
			// Remove cancel btn if it is here
			if (document.querySelector('.post-cancel')) {
				document.querySelector('.post-cancel').remove()
			}
			// Clear ID from hidden field
			this.clearIdInput()
			// Clear text
			this.clearFields()
		}
	}
}
export const ui = new UI()