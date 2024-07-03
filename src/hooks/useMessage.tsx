export function useMessage() {
  function popUp(text: string, time: number = 6) {
    const body: HTMLElement | null = document.getElementById("app");

    if (!body) return;

    const messageEl: HTMLElement = document.createElement("div");
    messageEl.textContent = text;
    messageEl.classList.add('popup')
    messageEl.style.animation = `popup ${time}s both ease-out`

    body.appendChild(messageEl);

    setTimeout(() => {
        body.removeChild(messageEl)
    }, time * 1000)
  }

  return { popUp };
}
