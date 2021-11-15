import axiosClient from './axiosClient'

const orderAPI = {
	getAllOrder: async (params) => {
		const url = '/orders'
		return await axiosClient.get(url, { params })
	},

	addOrder: async (data) => {
		const url = '/orders'
		return await axiosClient.post(url, { data })
	},

	updateOrder: async (id, data) => {
		const url = `/orders/${id}`
		return await axiosClient.post(url, { data })
	},

	getOrder: async (id) => {
		const url = `/orders/${id}`
		return await axiosClient.get(url)
	},

	deleteOrder: async (id) => {
		const url = `/orders/${id}`
		return await axiosClient.delete(url)
	},
}

export default orderAPI
