let config = {
	getSysInfo(){
		return new Promise((resolve, reject)=>{
			uni.getSystemInfo({
				success(info) {
					resolve(info)
				},
				fail(err) {
					reject(err)
				}
			})
		})
		
	}
}

module.exports = config