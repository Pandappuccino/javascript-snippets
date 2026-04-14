// Create new <style> element within page that contains the .tab, .toggle, and @keyframes rules used by the styling
const style = document.createElement('style');
style.textContent = '@keyframes fadeIn {from {opacity: 0} to {opacity: 1}} .tab {height:100%; width:100%; overflow: auto; display: none} .tab.active {display: block!important} .fade {animation: fadeIn 0.5s}';
document.head.appendChild(style);

// Initialize tabs and buttons
const tabs = document.querySelectorAll('.tab'); // Selector for the tabs themselves
const btns = document.querySelectorAll('.toggle'); // Selector for the toggle elements
var activeToggle;
var activeTab;

// Add event listener to call toggle function
btns.forEach((btn, index) => {
	btn.addEventListener('click', toggleTab);
});

// Toggle function 
function toggleTab() {
	// Step 1: Remove the "active" and "fade" classes from each tab.
	tabs.forEach((tab, index) => {
		tab.classList.remove('active');
		tab.classList.remove('fade');
	});

	// Step 2: Remove the "active" class from each button.
	btns.forEach((btn, index) => {
		btn.classList.remove('active');
	})

	// Step 3: Set the variables based on the data of the clicked button.
	activeToggle = this.dataset.tab;
	activeToggle = document.querySelector(`[data-tab="${CSS.escape(activeToggle)}"]`);
	activeTab = document.querySelector(this.dataset.tabToggle);

	// Step 4: Add the "active" class to the new tab and button.
	activeTab.classList.add('active');
	activeTab.classList.add('fade');
	activeToggle.classList.add('active');
}
