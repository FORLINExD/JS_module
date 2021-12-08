// 1 - створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
// let container = document.body.appendChild(document.createElement('div'));
// container.style.fontSize = '20px';
// container.style.display = 'flex';
// container.style.columnGap = '10px';
// container.style.margin = '10px'
//
// let form = container.appendChild(document.createElement('form'));
// form.style.display = 'flex';
// form.style.columnGap = '10px';
//
// let inputName = document.createElement('input');
// inputName.name = 'nameForm'
// inputName.type = 'text';
// inputName.placeholder = 'Name';
//
// let inputAge = document.createElement('input');
// inputAge.name = 'ageForm';
// inputAge.type = 'number';
// inputAge.placeholder = 'Age';
//
// let btn = document.createElement('button');
// btn.innerText = 'Send';
// btn.type = 'Submit';
//
// form.append(inputName, inputAge);
// container.appendChild(btn);
//
// let key = 'Key';
// let userArr = {
//     name: inputName.value,
//     age: inputAge.value
// }
//
// btn.addEventListener('click', function () {
//     if (inputName.value.length !== 0 && inputAge.value.length !== 0) {
//         localStorage.setItem(key, JSON.stringify(userArr));
//     } else {
//         alert('Fill the form');
//     }
// })



// 2 - створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//
// let divMain = document.body.appendChild(document.createElement('div'));
// divMain.style.display = 'flex';
// divMain.style.margin = '10px';
//
// let form2 = divMain.appendChild(document.createElement('form'));
// form2.name = 'carsForm';
// form2.style.display = 'flex';
// form2.style.columnGap = '10px';
//
// let inputModel = document.createElement('input');
// inputModel.type = 'text';
// inputModel.name = 'model';
// inputModel.placeholder = 'Model';
//
// let inputType = document.createElement('input');
// inputType.type = 'text';
// inputType.name = 'type';
// inputType.placeholder = 'Type';
//
// let inputVolume = document.createElement('input');
// inputVolume.type = 'number';
// inputVolume.name = 'volume';
// inputVolume.placeholder = 'Volume';
//
// let btn2 = divMain.appendChild(document.createElement('button'));
// btn2.innerText = 'Send';
// btn2.style.marginLeft = '10px';
//
// form2.append(inputModel, inputType, inputVolume);
//
// let key = 'Key';
//
// let cars = (carModel, carType, carVolume) => {
//     let carsArr = JSON.parse(localStorage.getItem(key)) || [];
//
//     carsArr.push({carModel, carType, carVolume});
//     localStorage.setItem(key, JSON.stringify(carsArr));
// }
//
// btn2.addEventListener('click', function () {
//     cars(inputModel.value, inputType.value, inputVolume.value);
// })

