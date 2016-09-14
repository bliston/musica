import {select as _select} from 'tonal-array'
export function select (numbers, list) {
	let replicated_list = list
	for (let i = 0; i < 10; i++) {
		replicated_list += ' ' + list
	}
	return _select(numbers, replicated_list)
}