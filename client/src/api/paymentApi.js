import axiosClient from './axiosClient'

const paymentAPI = {
	addPayment: async (data) => {
		const url = '/payments'
		return await axiosClient.get(url, { data })
	},
}

export default paymentAPI
