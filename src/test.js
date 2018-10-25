async function showOff(phone) {
  return new Promise(
      (resolve, reject) => {
          var message = 'Hey friend, I have a new ' +
              phone.color + ' ' + phone.brand + ' phone';

          resolve(message);
      }
  );
};

showOff({color:"black", brand:"lg"});


