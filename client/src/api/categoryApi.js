import axiosClient from './axiosClient'

const categoryAPI = {
	getAllCategory: async (params) => {
		const url = '/categories'
		return await axiosClient.get(url, { params })
	},

	addCategory: async (data) => {
		const url = '/categories'
		return await axiosClient.post(url, { data })
	},

	updateCategory: async (id, data) => {
		const url = `/categories/${id}`
		return await axiosClient.post(url, { data })
	},

	getCategory: async (id) => {
		const url = `/categories/${id}`
		return await axiosClient.get(url)
	},

	deleteCategory: async (id) => {
		const url = `/categories/${id}`
		return await axiosClient.delete(url)
	},
}

export default categoryAPI
