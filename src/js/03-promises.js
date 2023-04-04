import { Notify } from 'notiflix/build/notiflix-notify-aio';
const el = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}


el.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();
  const amount = Number(el.amount.value);
  let delay = Number(el.delay.value);
  const step = Number(el.step.value);
 
  setTimeout(() => {
    for (let index = 1; index <= amount; index += 1) {
      createPromise(index, delay).then(onResolve).catch(onReject);
      delay += step;
    }
  }, delay);
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onResolve({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onReject({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}