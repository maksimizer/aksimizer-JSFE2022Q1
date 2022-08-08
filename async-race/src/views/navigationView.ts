export class NavigationView {
  render = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav-view');
    nav.innerHTML = `
      <button class="button-garage button">To garage</button>
      <button class="button-winners button">To winners</button>
    `;
    document.body.appendChild(nav);
  };
}

export const navigationView: NavigationView = new NavigationView();
