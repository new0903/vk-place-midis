const CloseApp = () => {
    bridge.send('VKWebAppClose', {
        status: 'success',
        payload: {
          name: 'value'
        }})
        .then((data) => { 
          if (data.status) {
            // Событие отправлено
          }
        })
        .catch((error) => {
          // Ошибка
          console.log(error);
        });
}



    export default CloseApp