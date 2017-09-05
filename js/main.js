// List of JavaScript tips
var tipsList = [
	"Python provides an intuitive way to do assignments and swapping in one line. <span class='code-block'>x, y = 10, 20<br/>print(x, y)</span><span class='output'>&gt;&gt; (10, 20)</span><span class='code-block'>x, y = y, x<br/>print(x, y)</span><span class='output'>&gt;&gt; (20, 10)</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Chaining Of Comparison Operators <span class='code-block'>n = 10</br>result = 1 < n < 20</br>print(result)</span><span class='output'>&gt;&gt; True</span><span class='code-block'>result = 1 > n <= 9</br>print(result)</span><span class='output'>&gt;&gt; False</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Use ternary Operators for conditional assignment <span class='code-block'>x = 10 if (y == 9) else 20</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Work With Multi-Line Strings <span class='code-block'>multiStr= (&quot;select * from multi_row &quot;</br>&quot;where row_id < 5 &quot;</br>&quot;order by age&quot;)</br>print(multiStr)</span><span class='output'>&gt;&gt; select * from multi_row where row_id < 5 order by age</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Storing list elements in a new variable <span class='code-block'>testList = [1,2,3]</br>x, y, z = testList</br>print(x, y, z)</span><span class='output'>&gt;&gt; 1, 2, 3</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Get the file path of an imported module <span class='code-block'>import threading</br>import socket</br>print(threading)</br>print(socket)</span><span class='output'>&gt;&gt; &lt;module 'threading' from '/usr/lib/python2.7/threading.py'&gt;</br>&gt;&gt; &lt;module 'socket' from '/usr/lib/python2.7/socket.py'&gt;</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Use '_' in the console to reference to output of last executed expression<span class='code-block'>2 + 1</br>print _</span><span class='output'>&gt;&gt; 3</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Like list comprehensions there exist also dictionary and set comprehensions<span class='code-block'>testDict = {i: i * i for i in range(10)}</br>testSet = {i * 2 for i in range(10)}</br>print(testSet)</br>print(testDict)</span><span class='output'>&gt;&gt; set([0, 2, 4, 6, 8, 10, 12, 14, 16, 18])</br>&gt;&gt; #{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Set breakpoints for debugging<span class='code-block'>import pdb</br>pdb.set_trace()</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Use dir() to inspect objects<span class='code-block'>test = [1, 3, 5, 7]</br>print( dir(test) )</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

  "Simplified if-statement<span class='code-block'>if m in [1,3,5,7]:</span>instead of:<span class='code-block'>if m==1 or m==3 or m==5 or m==7:</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Join strings<span class='code-block'>test = ['I', 'Like', 'Python', 'automation']</br>print(' '.join(test))</span><span class='output'>&gt;&gt; I like Python automation</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Reversing strings and lists 1<span class='code-block'>testList = [1, 3, 5]</br>testList.reverse()</br>print(testList)</span><span class='output'>&gt;&gt; [5, 3, 1]</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Reversing strings and lists 2<span class='code-block'>for element in reversed([1,3,5]): print(element)</span><span class='output'>&gt;&gt; 5</br>&gt;&gt; 3</br>&gt;&gt; 1</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Reversing strings and lists 3<span class='code-block'>print('Test Python'[::-1])</span><span class='output'>&gt;&gt; nohtyP tseT</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",

	"Reversing strings and lists 4<span class='code-block'>print([1, 3, 5][::-1])</span><span class='output'>&gt;&gt; [5, 3, 1]</span><span class='source'>Source: <a href='http://www.techbeamers.com/essential-python-tips-tricks-programmers/'>Techbeamers.com</a></span>",
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
