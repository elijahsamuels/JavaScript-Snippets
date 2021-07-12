previousSevenDays = () => {
	let numberOfDaysArray = [0,1,2,3,4,5,6]
	return numberOfDaysArray.map(days => new Date(Date.now() - 86400000 * days))
}
console.log(previousSevenDays())