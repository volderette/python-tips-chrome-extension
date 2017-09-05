// List of JavaScript tips
var tipsList = [
	"Python provides an intuitive way to do assignments and swapping in one line. <span class='code-block'>x, y = 10, 20<br/>print(x, y)</span><span class='output'>&gt;&gt; (10, 20)</span><span class='code-block'>x, y = y, x<br/>print(x, y)</span><span class='output'>&gt;&gt; (20, 10)</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Chaining Of Comparison Operators <span class='code-block'>n = 10</br>result = 1 < n < 20</br>print(result)</span><span class='output'>&gt;&gt; True</span><span class='code-block'>result = 1 > n <= 9</br>print(result)</span><span class='output'>&gt;&gt; False</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Use ternary Operators for conditional assignment <span class='code-block'>x = 10 if (y == 9) else 20</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Work With Multi-Line Strings <span class='code-block'>multiStr= (&quot;select * from multi_row &quot;</br>&quot;where row_id < 5 &quot;</br>&quot;order by age&quot;)</br>print(multiStr)</span><span class='output'>&gt;&gt; select * from multi_row where row_id < 5 order by age</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Storing list elements in a new variable <span class='code-block'>testList = [1,2,3]</br>x, y, z = testList</br>print(x, y, z)</span><span class='output'>&gt;&gt; 1, 2, 3</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",
];

// Tip Limit counter
var tipLimit = 3;

// Generate a number
function generateNumber() {
	return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
// 4. Show the count, and make sure the pluralization of "tip" or "tips" is correct
function generateTip() {
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
	tipButton.addEventListener('click', function() {
		tipLimit = tipLimit - 1;
		if (tipLimit >= 0) {
			generateTip();

			if (tipLimit === 0) {
				tipButton.innerHTML = 'See you in another tab!';
				tipButton.classList.add('disabled');
			}
		}
	});
}

onTipButtonClick();

// Get the first tip
generateTip();
