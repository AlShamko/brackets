module.exports = function check(str, bracketsConfig) {
	const openToClose = {};
	const closeToOpen = {};

	for (let i = 0; i < bracketsConfig.length; i++) {
			let open = bracketsConfig[i][0];
			let close = bracketsConfig[i][1];
			openToClose[open] = close;
			closeToOpen[close] = open;
	}


	const stack = [];

	for (let i = 0; i < str.length; i++) {
			let char = str[i];

			if (char in openToClose) {
					if (char in closeToOpen && stack.length > 0 && stack[stack.length - 1] === char) {
							stack.pop(); 
					} else {
							stack.push(char); 
					}
			} 
			else if (char in closeToOpen) {
					if (stack.length === 0 || stack[stack.length - 1] !== closeToOpen[char]) {
							return false; 
					}
					stack.pop(); 
			}
	}


	return stack.length === 0;
}

