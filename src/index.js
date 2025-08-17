import './style.css';
import img1 from './images/pexels-eugene-golovesov-1810803-32860766.jpg';
import img2 from './images/pexels-narcissan-32849129.jpg';
import img3 from './images/pexels-nikiemmert-33127482.jpg';

const gallery = document.createElement('div');
gallery.classList.add('gallery');

const images = [img1, img2, img3];
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
});

document.body.appendChild(gallery);