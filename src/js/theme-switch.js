const themeSwitcher = document.getElementById('theme-switch');

themeSwitcher.checked = false;
function clickHandler() {
  if (this.checked) {
    // Добавить изменение перемненным параграфов
    // .
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  console.log(localStorage.getItem('theme'));
}
themeSwitcher.addEventListener('click', clickHandler);

window.onload = checkTheme();

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  console.log(localStorage.getItem('theme'));

  if (localStorageTheme !== null && localStorageTheme === 'dark') {
    document.body.className = localStorageTheme;

    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.checked = true;
  }
}
