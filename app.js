const container = document.querySelector('.container');
const card = document.querySelector('.card');

container.addEventListener('mousemove', (e) => {
   const rect = card.getBoundingClientRect();
   const x = e.clientX - rect.left - rect.width/2;
   const y = e.clientY - rect.top - rect.height/2;

   const rotateX = (y/rect.height)*40;
   const rotateY = (x/rect.height)*40;

   card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
});

container.addEventListener('mouseleave', () => {
   card.style.transform = 'rotateX(0) rotateY(0)'
});


echo "# random-3dEffect" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ahmadjamal789/random-3dEffect.git
git push -u origin main