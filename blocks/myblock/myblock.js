import { fetchPlaceholders } from '/scripts/aem.js';

// fetch placeholders from the 'en' folder
const placeholders = await fetchPlaceholders('en');

export default function decorate(block) {

  const { foo } = placeholders;
  const text = block.querySelector('p');
  const regEx = /${foo}/i;
  text.replace(text.textContent, foo);
  block.textContent = '';
  block.textContent = text.textContent;
}


