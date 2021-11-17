import axiosClient from './axiosClient'

const uploadAPI = {
	upload: async (files) => {
		let formData = new FormData()
		files.forEach((file) => {
			formData.append('files', file)
		})

		return await axiosClient.post('/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
	},
	destroy: async (data) => {
		let formData = new FormData()

		return await axiosClient.post('/destroy', data)
	},
}

export default uploadAPI
