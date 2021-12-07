import axiosClient from './axiosClient'

const orderAPI = {
	getAllOrder: async (userId) => {
		const url = '/orders'

		if (userId) {
			return await axiosClient.get(url, userId)
		} else return await axiosClient.get(url)
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
