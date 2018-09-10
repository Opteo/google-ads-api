import { values } from 'lodash'

const parser = {
	parseSearch(rows:any){
		return values(rows.results)
	}
}

export default parser