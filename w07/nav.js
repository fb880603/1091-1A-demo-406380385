function change(index) {
  const p = document.getElementById('show');
  console.log('p', p);
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01intro/intro.html" />';
      break;
    case 2:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01intro/pokemon.html" />';
      break;
    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02blog/blog.html" />';
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02-ImageGallery/img.html" />';
      break;
    case 5:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w03-div-tku60/div_tku60.html" />';
      break;
    case 6:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w04git/index.html" />';
      break;
    case 7:
      p.innerHTML = '<iframe width=100% height=100% src="./w06/index.html" />';
      break;
    case 8:
      p.innerHTML = '<iframe width=100% height=100% src="../我的課表/myclass_xx.html" />';
      break;
    case 9:
      p.innerHTML = '<iframe width=100% height=100% src="../履歷表/履歷表.html" />';
      break;
  } 
}
