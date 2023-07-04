export default function clickOutside(element, userEvents, callback) {
  const html = document.documentElement;

  userEvents.forEach((userEvent) => {
    html.addEventListener(userEvent, (event) => {
      if (!element.contains(event.target)) {
        callback();
      }
    });
  });
}
