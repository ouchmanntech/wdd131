document.addEventListener('DOMContentLoaded', () => {
  // 1. Update copyright year
  const copyrightYear = document.querySelector('footer p');
  if (copyrightYear) {
    copyrightYear.innerHTML = `©${new Date().getFullYear()} | Uche Kalu | Lagos, Nigeria`;
  }

  // 2. Update last modified date
  const lastModElement = document.querySelector('footer small');
  if (lastModElement) {
    const lastModDate = new Date(document.lastModified);
    
    // Nice readable format: "May 30, 2025 13:54"
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false  // 24-hour format; change to true for AM/PM
    };
    
    lastModElement.textContent = `Last Modification: ${lastModDate.toLocaleString('en-US', options)}`;
  }
});