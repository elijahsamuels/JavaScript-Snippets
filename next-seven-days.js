nextSevenDays = () => {
	let numberOfDaysArray = [1,2,3,4,5,6,7]
	return numberOfDaysArray.map(days => new Date(Date.now() + 86400000 * days))
}
console.log(nextSevenDays())